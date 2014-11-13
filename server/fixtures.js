if (Posts.find().count() === 0){
  Posts.insert({
    title:"Running Lean",
    author:"Ash Maurya",
    url:"http://runninglean.com"
  });
   Posts.insert({
    title:"The Lean Startup",
    author:"Eric Reis",
    url:"http://startuplessonlearned.com"
  });
   Posts.insert({
    title:"HTML5: The Missing Manual",
    author:"O'Reilly",
    url:"http://safaribooks.com"
  });
}