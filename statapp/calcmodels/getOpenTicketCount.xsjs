function getOpenTicketCount(ticketsTable) {
    var openTicketCount = 0;
    
    for (var record in ticketsTable) {
        if (record.dateClosed === null) {
            openTicketCount++;
        }
    }
    
    return openTicketCount;
}