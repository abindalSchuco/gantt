var selectedTaskBeforeEdit;

(function () {

    function ganttLiveEdit(gantt) {
        gantt.config.live_edit = true;

        gantt._live_edit = {
            input: null,
            activeCell: null,
            activeTask: null,
            activeTaskId: null,
            activeColumnId: null,
            activeColumnIndex: null,
            isDateField: false,
            calendar: null
        }

        if (!gantt.config.live_edit) {
            return;
        }

        gantt._init_grid = function () {
            this._click.gantt_close = this.bind(function (e, id, trg) {
                this.close(id);
                return false;
            }, this);
            this._click.gantt_open = this.bind(function (e, id, trg) {
                this.open(id);
                return false;
            }, this);


            this._click.gantt_row = this.bind(function (e, id, trg) {
                if (e.target.getAttribute('id') == 'gantt_live_editor') {
                    return;
                }

                if (id !== null) {
                    var task = this.getTask(id);
                    if (this.config.scroll_on_click)
                        this.showDate(task.start_date);
                    this.callEvent("onTaskRowClick", [id, trg]);
                }
            }, this);

            this._click.gantt_grid_head_cell = this.bind(function (e, id, trg) {
                var column = trg.getAttribute("column_id");

                if (!this.callEvent("onGridHeaderClick", [column, e]))
                    return;

                if (column == "add") {
                    this._click.gantt_add(e, this.config.root_id);
                    return;
                }

                if (this.config.sort) {
                    var sorting_method = column,
                        conf;

                    for (var i = 0; i < this.config.columns.length; i++) {
                        if (this.config.columns[i].name == column) {
                            conf = this.config.columns[i];
                            break;
                        }
                    }

                    if (conf && conf.sort !== undefined && conf.sort !== true) {
                        sorting_method = conf.sort;

                        if (!sorting_method) { // column sort property 'false', no sorting
                            return;
                        }
                    }

                    var sort = (this._sort && this._sort.direction && this._sort.name == column) ? this._sort.direction : "desc";
                    // invert sort direction
                    sort = (sort == "desc") ? "asc" : "desc";
                    this._sort = {
                        name: column,
                        direction: sort
                    };
                    this.sort(sorting_method, sort == "desc");
                }
            }, this);

            if (!this.config.sort && this.config.order_branch) {
                this._init_dnd();
            }

            this._click.gantt_add = this.bind(function (e, id, trg) {
                if (this.config.readonly) return;

                var taskId = gantt.addTask({
                    id: (new Date()).valueOf(),
                    text: "New Task",
                    start_date: new Date(),
                    duration: 1
                }, id ? id : this.config.root_id);

                this.liveEdit(taskId);
                return false;
            }, this);

            if (this._init_resize) {
                this._init_resize();
            }

        };

        function getNodeIndex(node) {
            var index = 0;
            while ((node = node.previousElementSibling)) {
                index++;
            }
            return index;
        }

        function getCellNode(node) {
            if (node.className && node.className.indexOf("gantt_cell") > -1) {
                return node;
            }

            while (node.className.indexOf("gantt_cell") < 0) {
                node = node.parentNode;
            }

            return node;
        }

        function getRowNode(cellNode) {
            if (cellNode.className.indexOf("gantt_row") > -1) {
                return cellNode;
            }

            while (cellNode.className.indexOf("gantt_row") < 0) {
                cellNode = cellNode.parentNode;
            }

            return cellNode;
        }

        function getCellContent(node) {
            var content = null;
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].className == "gantt_tree_content") {
                    content = node.childNodes[i];
                    break;
                }
            }

            return content;
        }

        function getCellIndex(cellNode) {
            var index = 0;

            while (cellNode = cellNode.previousSibling) {
                index++;
            }
            return index;
        }

        function getColumnId(cellNode) {
            var row = getRowNode(cellNode);
            var index = getCellIndex(cellNode);

            return gantt.$grid_scale.childNodes[index].getAttribute('column_id');
        }

        function updateTask() {

            if (gantt._live_edit.isDateField) {
                gantt._live_edit.activeTask[gantt._live_edit.activeColumnId] = gantt._live_edit.calendar.getDate();
                gantt._live_edit.calendar.detachObj(gantt._live_edit.input);
                gantt._live_edit.input.removeAttribute('data-calendar');
            } else {
                gantt._live_edit.activeTask[gantt._live_edit.activeColumnId] = gantt._live_edit.input.value;
            }
            var task = gantt.getTask(gantt._live_edit.activeTaskId);

            if (TaskInlineValidation(task) && AnyPropertyChanged(task)) {
                return UpdateTaskProperties(task, selectedTaskBeforeEdit);
            } else {
                return false;
            }
        }

        /** prepare live editor */
        gantt._live_edit.input = document.createElement('input');
        gantt._live_edit.input.id = 'gantt_live_editor';
        gantt._live_edit.input.style.width = '100%';
        gantt._live_edit.input.style.backgroundColor = "";

        if (typeof (dhtmlXCalendarObject) == 'function') {
            gantt._live_edit.calendar = new dhtmlXCalendarObject(gantt._live_edit.input);
            gantt._live_edit.calendar.hideTime();
            gantt._live_edit.calendar.showWeekNumbers();
            gantt._live_edit.calendar.showToday();
            gantt._live_edit.calendar.setWeekStartDay(7);
            $('.dhtmlxcalendar_label_clear').hide();
        }

        /** move editor to next cell on tab, or close editor on focus */
        gantt.event(gantt._live_edit.input, 'keydown', function (e) {

            var tabCode = 9;
            var enterCode = 13;

            var escapse = 27;
            if (e.keyCode == escapse) {
                e.preventDefault();
                flagEditMode = false;
                var task = gantt.getTask(gantt._live_edit.activeTaskId);
                task.text = selectedTaskBeforeEdit.text;
                task.DurationString = selectedTaskBeforeEdit.DurationString;
                task.start_date = selectedTaskBeforeEdit.start_date;
                task.end_date = selectedTaskBeforeEdit.end_date;
                task.predecessor = selectedTaskBeforeEdit.predecessor;
                task.progress = selectedTaskBeforeEdit.progress;
                gantt.refreshData();
                // this added when escape hit and gantt._live_edit.input should have old value 
                gantt._live_edit.input.value = getColumnValue(gantt._live_edit.activeColumnId, task);
                return;
            }
            if (e.keyCode != tabCode && e.keyCode != enterCode) {
                return;
            }


            if (e.keyCode == enterCode) {
                e.preventDefault();

                return updateTask();
            }

            if (e.preventDefault) {
                e.preventDefault();
            }

            updateTask();

            /** search for next cell */
            var currentRow = gantt.getTaskRowNode(gantt._live_edit.activeTaskId);
            var currentCell = currentRow.childNodes[gantt._live_edit.activeColumnIndex];
            var nextCell = currentCell.nextElementSibling;

            /** move to next row if cell not found */
            if (nextCell == null || (nextCell.className.indexOf('gantt_last_cell') >= 0 && getCellContent(nextCell) == null)) {
                var nextRow = getRowNode(currentCell).nextElementSibling;

                if (nextRow == null) {
                    gantt._live_edit.calendar.hide();
                    return false;
                }

                nextCell = nextRow.childNodes[0];

                gantt.showTask(gantt.getNext(gantt._live_edit.activeTaskId));
                gantt.updateTask(gantt._live_edit.activeTaskId);
            } else if (getCellContent(nextCell) == null) {
                nextCell = nextCell.nextElementSibling;
            }

            var event = new MouseEvent('dblclick', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });
            nextCell.dispatchEvent(event);

            return false;
        });

        function formatDate(date) {
            var day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            var monthIndex = date.getMonth() + 1;
            var year = date.getFullYear();
            if (monthIndex > 9) {
                return year + '-' + monthIndex + '-' + day;
            } else {
                return year + '-0' + monthIndex + '-' + day;
            }
        }

        // created here so that no bundling issue 
        function InlineEditingAvaliable(columnId) {
            switch (columnId.toUpperCase()) {
                case "ORDERID":
                    return false;
                    break;
                case "CUSTOMID":
                    return false;
                    break;
                case "SCHEDULEMODE":
                    return false;
                    break;
                case "ACTUALTASKID":
                    return false;
                    break;
                case "VIOLATIONSYMBOL":
                    return false;
                    break;
                case "LOCKED":
                    return false;
                    break;
                case "MOVEICON":
                    return false;
                    break;
                case "HASDOCUMENT":
                    return false;
                    break;
                case "HASEMSNODE":
                    return false;
                    break;
                case "DELTA":
                    return false;
                    break;
                default:
                    return true;
                    break;

            }
        }

        function getColumnValue(columnId,task) {
        
            switch (columnId) {
                case "text":
                    return task.Title;
                    break;
                case "DurationString":
                    return task.DurationString;
                    break;
                case "start_date":
                    return task.start_date;
                    break;
                case "end_date":
                    return task.end_date;
                    break;
                case "progress":
                    return (parseFloat(task.progress)*100);
                    break;
                case "Predecessor":
                    return task.Predecessor;
                    break;              

            }


        }
        /** take live editor into action */
        gantt.attachEvent("onGanttReady", function () {

            gantt.eventRemove(gantt.$container, 'dblclick', gantt._on_dblclick);
            gantt.event(gantt.$task_data, 'dblclick', gantt._on_dblclick);

            gantt.event(gantt.$grid_data, 'dblclick', function (e) {
                var target = e.target || e.srcElement;

                if (e.target.getAttribute('id') == 'gantt_live_editor') {
                    return;
                }

                if (target.className != "gantt_grid_data") {
                    gantt._live_edit.activeTaskId = gantt.locate(e);
                    gantt._live_edit.activeTask = gantt.getTask(gantt._live_edit.activeTaskId);
                    gantt._live_edit.activeTaskId = gantt.locate(e);
                    gantt._live_edit.activeTask = gantt.getTask(gantt._live_edit.activeTaskId);
                    gantt._live_edit.activeCell = getCellNode(target);
                    gantt._live_edit.activeColumnId = getColumnId(gantt._live_edit.activeCell);
                    gantt._live_edit.isDateField = gantt._live_edit.activeColumnId.indexOf('date') >= 0;
                    gantt._live_edit.activeColumnIndex = getNodeIndex(gantt._live_edit.activeCell);
                    var task = gantt.getTask(gantt._live_edit.activeTaskId);
                    if ((task.Summary && gantt._live_edit.activeColumnId.toUpperCase() != 'TEXT') || (isMasterTask(task) && GetIsPm() == '0')) {
                        flagEditMode = false;
                        return false;
                    }
                    if (selectedTaskBeforeEdit != null && selectedTaskBeforeEdit.ActualTaskId == gantt._live_edit.activeTaskId) {
                        gantt.refreshData();
                        selectedTaskBeforeEdit = null;
                        flagEditMode = false;
                        gantt._live_edit.input.value = getColumnValue(gantt._live_edit.activeColumnId, task);
                        return false
                    } else {
                        selectedTaskBeforeEdit = Copy(gantt._live_edit.activeTask);
                    }

                    if (InlineEditingAvaliable(gantt._live_edit.activeColumnId)) {
                        flagEditMode = true;
                        var content = getCellContent(gantt._live_edit.activeCell);

                        var contentCache = content.innerText;

                        var styleCache = getComputedStyle(content, null);
                        content.innerHTML = '';

                        gantt._live_edit.input.style.height = styleCache.height;
                        gantt._live_edit.input.value = contentCache;
                        gantt._live_edit.input.style.backgroundColor = "";
                        gantt._live_edit.input.readOnly = false;

                        content.appendChild(gantt._live_edit.input);

                        if (gantt._live_edit.isDateField) {
                            gantt._live_edit.input.setAttribute('data-calendar', 'true');


                            gantt._live_edit.calendar.setFormatedDate(contentCache, "%Y-%m-%d");
                            gantt._live_edit.calendar.attachObj(gantt._live_edit.input);                            // date content need to be different format 

                            var newDateFormat = new Date(contentCache);
                            var newDate = formatDate(newDateFormat);
                            gantt._live_edit.calendar.setDate(newDate);
                            gantt._live_edit.input.setAttribute('data-old-value', contentCache);
                            gantt._live_edit.input.setAttribute('value', contentCache);
                            gantt._live_edit.calendar.hideTime();
                            gantt._live_edit.calendar.show();
                            gantt._live_edit.calendar.setWeekStartDay(7);
                            if (GetWorkWeek() === "5 Days/Week") {
                                gantt._live_edit.calendar.disableDays("week", [6, 7]);
                            }
                            $("input[data-calendar='true']").prop('readonly', true);
                        } else {
                            gantt._live_edit.calendar.hide();
                            gantt._live_edit.calendar.detachObj(gantt._live_edit.input);
                            gantt._live_edit.input.readOnly = false;
                        }
                        document.querySelectorAll('#gantt_live_editor')[0].focus();
                        document.querySelectorAll('#gantt_live_editor')[0].select();
                    } else {
                        flagEditMode = false;
                        // gantt._live_edit.remove();
                        return false;
                    }
                }
            });
        });

        gantt.liveEdit = function (taskId, columnId = null) {

            gantt.showTask(taskId);

            var rowNode = gantt.getTaskRowNode(taskId);
            var cellNode = rowNode ? rowNode.childNodes[0] : null;
            var dblClick = new MouseEvent('dblclick', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            if (!cellNode) {
                return;
            }

            if (columnId == null) {
                cellNode.dispatchEvent(dblClick);
            } else {
                while (getColumnId(cellNode) != columnId) {
                    cellNode = cellNode.nextElementSibling;

                    if (cellNode == null) {
                        break;
                    }
                }

                if (cellNode) {
                    cellNode.dispatchEvent(dblClick);
                }
            }

            document.querySelectorAll('#gantt_live_editor')[0].focus();
            document.querySelectorAll('#gantt_live_editor')[0].select();
        }
    }

    if (window.Gantt) {
        Gantt.plugin(ganttLiveEdit);
    } else {
        ganttLiveEdit(window.gantt);
    }

})();
