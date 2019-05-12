module.exports = ({ router }) => {
  // getting the home route
  router.get('/homepage/get-users-posts', (ctx, next) => {
    ctx.body = '[{"id":1,"username":"Babbette Verdie","email":"bverdie0@amazon.de","context":"commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus","photo_link":"http://dummyimage.com/116x205.bmp/5fa2dd/ffffff"},{"id":2,"username":"Bronnie Eatock","email":"beatock1@istockphoto.com","context":"ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit","photo_link":"http://dummyimage.com/203x192.jpg/cc0000/ffffff"},{"id":3,"username":"Gretal Barnish","email":"gbarnish2@lycos.com","context":"nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia","photo_link":"http://dummyimage.com/115x196.jpg/5fa2dd/ffffff"},{"id":4,"username":"Valdemar Parzis","email":"vparzis3@marketwatch.com","context":"nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna","photo_link":"http://dummyimage.com/234x121.bmp/5fa2dd/ffffff"},{"id":5,"username":"Hayden Kochl","email":"hkochl4@aboutads.info","context":"fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis","photo_link":"http://dummyimage.com/232x131.jpg/ff4444/ffffff"}]'
  });
};