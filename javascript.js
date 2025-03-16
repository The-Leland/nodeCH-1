

//challenge one

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.length = 0;
//         this.list = [];
//     }

//     addNode(data) {
//         const newNode = new Node(data);
//         if (this.list.length === 0) {
//             this.list.push(newNode);
//         } else {
//             this.list[this.list.length - 1].next = newNode;
//             this.list.push(newNode);
//         }
//     }

//     getFirstNode() {
//         return this.list.length ? this.list[0] : null;
//     }

//     getLastNode() {
//         return this.list.length ? this.list[this.list.length - 1] : null;
//     }

//     popLastNode() {
//         if (!this.list.length) {
//             return null;
//         }
//         const lastNode = this.list.pop();
//         if (this.list.length) {
//             this.list[this.list.length - 1].next = null;
//         }
//         return lastNode;
//     }
// }


// const list = new LinkedList();
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);

// console.log(list.getFirstNode()); 
// console.log(list.getLastNode());  
// console.log(list.popLastNode());  
 


//challenge two


function logAllTags() {
    
    const elements = document.getElementsByTagName('*');
    
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].tagName);
    }
}

logAllTags();

// got this message when I tried to run the code and my search 
// for mor info said there wasn't anything I could do about it.

// Content-Security-Policy: The page’s settings blocked an event 
// handler (script-src-attr) from being executed because it violates 
// the following directive: “script-src 'nonce-00UOp74xquUZAWGJZyTytQ' 
// 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:”
// Source: _rtf(this)



//challenge three

//that's in a separate file.
