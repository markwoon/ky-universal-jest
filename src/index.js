import ky from 'ky-universal';

// will fail if babel config is not used
class Foo {
  #bar = "bar";

  test(obj) {
    return #bar in obj;
  }
}


console.log('hello, world');


ky.get('https://jsonplaceholder.typicode.com/posts/1')
    .json()
    .then(json => console.log(json));
