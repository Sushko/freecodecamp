  function quoteGenerate(){
    var quotes = [
      {
        quote : 'quote1',
        author : 'author1',
          url : 'url1'
      },
      {
        quote : 'quote2',
        author : 'author2',
        url : 'url2'
      },
      {
        quote : 'quote3',
        author : 'author3',
        url : 'url3'
      },
      {
        quote : 'quote4',
        author : 'author4',
        url : 'url4'
      }
    ];
    var quote = Math.floor(Math.random() * quotes.length);
    return quotes[quote];
  }
      console.log( quoteGenerate());