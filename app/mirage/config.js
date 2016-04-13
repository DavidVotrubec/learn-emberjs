export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
  
  this.get('books', function(db, request) {
                    
        const books = [
            {
                type: 'books',
                id: '1',
                attributes: {
                    name: 'EmberJS',
                    author: 'Yehuda Katz',
                    desc: 'test description',
                    binding: 'paperback'   
                }
            },
            {
                type: 'books',
                id: '2',
                attributes: {
                    name: 'AngularJs',
                    author: 'Misko Hevery',
                    desc: 'My past 2 years'  
                }
            },
            {
                type: 'books',
                id: '3',
                attributes: {
                    name: 'Bible',
                    author: 'ton of people',
                    year: 0,
                    desc: 'those who do not have inner moral compass need external compass'
                }
            },
             {
                type: 'books',
                id: '4',
                attributes: {
                    name: 'EmberJS',
                    author: 'Yehuda Katz',
                    desc: 'test description',
                    binding: 'paperback'   
                }
            },
            {
                type: 'books',
                id: '5',
                attributes: {
                    name: 'AngularJs',
                    author: 'Misko Hevery',
                    desc: 'My past 2 years'  
                }
            },
            {
                type: 'books',
                id: '6',
                attributes: {
                    name: 'Bible',
                    author: 'ton of people',
                    year: 0,
                    desc: 'those who do not have inner moral compass need external compass'
                }
            },
        ];
      
        if (request.queryParams.name !== undefined) {
            let filteredBooks = books.filter(function(i) {
                return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
            });
            return { data: filteredBooks };
        }
        else {
            return { data: books };
        }
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
