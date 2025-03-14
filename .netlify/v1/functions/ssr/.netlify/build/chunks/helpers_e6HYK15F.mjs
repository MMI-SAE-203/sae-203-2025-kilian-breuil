function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    };
  
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(date);
  
    return formattedDate;
}

export { formatDate as f };
