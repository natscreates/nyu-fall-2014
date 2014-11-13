var postsData = [
  {
    title:'Moby Dick',
    author:'Herman Mellville',
    url:'http://google.com'
  },
  {
    title:'The Catcher in the Rye',
    author:'J.D. Salinger',
    url:'http://yahoo.com'
  },
  {
    title:'Cujo',
    author:'Stephen King',
    url:'http://espn.com'
  },
  {
    title:'The Lord of The Rings',
    author:'J.R.R. Tokien',
    url:'http://twitter.com'
  },
  {
    title:'The Lion The Witch and The Wardrobe',
    author:'C.S. Lewis',
    url:'http://facebook.com'
  }
];
  
Template.postsList.helpers ({
 // posts:postsData
 posts: function() {
   return Posts.find({},{sort:{likes:-1, title:1}});
  }
});