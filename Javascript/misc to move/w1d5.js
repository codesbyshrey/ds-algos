
class ListNode {
     constructor(data) {
       this.data = data;
       this.next = null;
     }
   }
   
   /**
    * This class keeps track of the start (head) of the list and to store all the
    * functionality (methods) that each list should have.
    */
   class SinglyLinkedList {
     constructor() {
       this.head = null;
     }
   
     isEmpty() {
       return this.head === null? true: false
     }
   
   
     insertAtBack(data) {
       const newElement = new ListNode(data);
       
       if (this.head == null) {
         this.head = newElement;
         return this;
       }
   
       let runner = this.head;
       while (runner.next != null) {
         runner = runner.next;
       }
       runner.next = newElement;
       return this;
     }
   
   
     /**
      * Concatenates the nodes of a given list onto the back of this list.
      * - Time: O(?).
      * - Space: O(?).
      * @param {SinglyLinkedList} addList An instance of a different list whose
      *    whose nodes will be added to the back of this list.
      * @returns {SinglyLinkedList} This list with the added nodes.
      */
     concat(addList) {}
     
     /**
      * Finds the node with the smallest data and moves that node to the front of
      * this list.
      * - Time: O(?).
      * - Space: O(?).
      * @returns {SinglyLinkedList} This list.
      */
     moveMinToFront() {
       // create var that holds the min value
       // create var that holds the node before min
     }
     
   
   
   
     insertAtBackMany(vals) {
       for (const item of vals) {
         this.insertAtBack(item);
       }
       return this;
     }
   
   
     toArr() {
       const arr = [];
       let runner = this.head;
   
       while (runner) {
         arr.push(runner.data);
         runner = runner.next;
       }
       return arr;
     }
   }
   
   /******************************************************************* 
   Multiple test lists already constructed to test your methods on.
   Below commented code depends on insertAtBack method to be completed,
   after completing it, uncomment the code.
   */
   const emptyList = new SinglyLinkedList();
   
   const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
   const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
   const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
   const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
   const unorderedList = new SinglyLinkedList().insertAtBackMany([
     -5, -10, 4, -3, 6, 1, -7, -2,
   ]);
   
   
   // Print your list like so:
   console.log(firstThreeList.toArr());
   
   // uncomment when finished with concat
   firstThreeList.concat(secondThreeList);
   // console.log(firstThreeList.toArr());