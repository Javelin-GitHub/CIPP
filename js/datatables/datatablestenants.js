
$(document).ready(function () {


    var oTable = $('.datatable-1').dataTable(
        {
            language: {
                paginate: {
                    next: '<i class="fas fa-arrow-right"></i>',
                    previous: '<i class="fas fa-arrow-left"></i>'
                }
            },
            "columnDefs": [
                { "searchable": false, "targets": [1, 2, 3, 4, 5, 6, 7] },
                {
                    "targets": [-1],
                    "visible": false,
                    "searchable": true,
                },
                { "className": "dt-center", "targets": [2, 3, 4, 5, 6, 7] },

            ],
            "deferRender": true,
            "pageLength": 10,
            "ajax": {

                "url": "/api/ListTenants",
                "dataSrc": "",
            },
            dom: 'fBlrtip',
            buttons: [
                { extend: 'copyHtml5', className: 'btn btn-primary' },
                { extend: 'excelHtml5', className: 'btn btn-primary' },
                { extend: 'csvHtml5', className: 'btn btn-primary' },
                { extend: 'pdfHtml5', className: 'btn btn-primary' },
            ],
            "columns": [
                { "data": "displayName" },
                { "data": "defaultDomainName" },
                {
                    "data": "customerId",
                    render: function (customerId, type, row) { return '<a href="https://portal.office.com/Partner/BeginClientSession.aspx?CTID=' + customerId + '&CSDEST=o365admincenter"><i class="fas fa-cog fa-fw"></i></a>' }
                },
                {
                    "data": "defaultDomainName",
                    render: function (defaultDomainName, type, row) { return '<a href="https://outlook.office365.com/ecp/?rfr=Admin_o365&exsvurl=1&delegatedOrg=' + defaultDomainName + '""><i class="fas fa-cog fa-fw"></i></a>' }
                },
                {
                    "data": "defaultDomainName",
                    render: function (defaultDomainName, type, row) { return '<a href="https://aad.portal.azure.com/' + defaultDomainName + '"><i class="fas fa-cog fa-fw"></i></a>' }
                },
                {
                    "data": "defaultDomainName",
                    render: function (defaultDomainName, type, row) { return '<a href="https://admin.teams.microsoft.com/?delegatedOrg=' + defaultDomainName + '"><i class="fas fa-cog fa-fw"></i></a>' }
                },
                {
                    "data": "defaultDomainName",
                    render: function (defaultDomainName, type, row) { return '<a href="https://portal.azure.com/' + defaultDomainName + '""><i class="fas fa-cog fa-fw"></i></a>' }
                },
                {
                    "data": "defaultDomainName",
                    render: function (defaultDomainName, type, row) { return '<a href="https://endpoint.microsoft.com/' + defaultDomainName + '"><i class="fas fa-cog fa-fw"></i></a>' }
                },

                { "data": "domains" }

            ],
            "order": [[0, "asc"]],

        });
    $('.dataTables_paginate').addClass("btn-group datatable-pagination");
    $('.dataTables_paginate > a').wrapInner('<span />');
});