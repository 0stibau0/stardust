
    //connecting to our database
    const url = "https://secondsemester-9317.restdb.io/rest/product?max=10";
    const options = {
      headers: {
        "x-apikey": "6335d38b32330102d591d2b0",
      },
    };
    
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => handleProductList(data));
    
    //now we are fetching the data
    function handleProductList(data) {
      console.log(data);
      data.forEach(showProduct);
    }
    
    