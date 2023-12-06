
/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

  щось не трапляється як те все поєднати (
*/

class Component  {
  constructor (public props:{title:string}) {
  }
}

class Page extends Component {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};