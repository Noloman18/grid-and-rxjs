import { Observable } from 'rxjs/Observable';

var observable = Observable.create((observer:any) => {
    observer.next('Hello');
    observer.next('Better living through chemistry');
});

var subscriber = observable.subscribe((message:string) =>addItem(message))
subscriber.unsubscribe();

function addItem(message:string) {
    var newItem = document.createElement("li");
    newItem.innerHTML = message;

    var element = document.getElementById('output');
    
    element.appendChild(newItem);
}