const obj = {
    myVar: 'foo',
    
    myFunc: () => { 
      console.log(this);
    }
  };

  const obj2 = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this.myVar);
    }
  };

  obj.myFunc();
  obj2.myFunc();

  //const returnValueInstantly = 


  //const returnObjectInstantly = 
