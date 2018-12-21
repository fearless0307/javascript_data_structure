# Data structure
This repository contains the solution of all the problem based on data structure.
## Problems on Arrays
1. Given an array A of size N, construct a Sum Array S(of same size) such that S is equal to the sum of all the elements of A except A[i]. Your task is to complete the function SumArray(A, N) which accepts the array A and N(size of array).
2. This is a functional problem . Your task is to return the product of array elements under a given modulo.<br />The modulo operation finds the remainder after division of one number by another. For example, K(mod(m))=K%m= remainder obtained when K is divided by m.
3. Given an increasing sequence a[], we need to find the K-th missing contiguous element in the increasing sequence which is not present in the sequence. If no k-th missing element is there output -1.
4. Write a program to input a list of n integers in an array and arrange them in a way similar to the to-and-fro movement of a Pendulum.<br />The minimum element out of the list of integers, must come in center position of array. If there are even elements, then minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)<br />The next number (next to minimum) in the ascending order, goes to the right, the next to next number goes to the left of minimum number and it continues like a Pendulum.
5. Given two arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array.

## Problems on Matrix
1. There is the Rectangular path for a Train to travel consisting of n and m rows and columns respectively. The train will start from one of grid cells and it will be given a command in the form of String s. consisting of characters ‘L’, ‘R’, ‘U’, ‘D’.The train will follow the instructions of the command string, where 'L' corresponds moving to the left, 'R' towards the right, 'U' for moving up, and 'D' means down.<br />You have already selected the command string s, and are wondering if it is possible to place the train in one of the grid cells initially and have it always stay entirely within the grid upon execution of the command string s. Output “1” if there is a starting cell for which the train doesn’t fall off the grid(track) on following command s, otherwise, output "0".
2. Given an incomplete Sudoku configuration in terms of a 9x9 2-D square matrix (mat\[ \]\[ \]) the task to check if the configuration has a solution or not.
3. Given a N X N matrix (M) filled with 1 , 0 , 2 , 3 . Your task is to find whether there is a path possible from source to destination, while traversing through blank cells only. You can traverse up, down, right and left.<br />A value of cell 1 means Source.<br />A value of cell 2 means Destination.<br />A value of cell 3 means Blank cell.<br />A value of cell 0 means Blank Wall.<br />Note : there is only single source and single destination.
4. Given an square matrix, turn it by 90 degrees in anti-clockwise direction without using any extra space.
5. Given a 2D matrix of size M*N. Traverse and print the matrix in spiral form.

## Problems on Linked List
1. Given a Linked List of integers, write a function to modify the linked list such that all even numbers appear before all the odd numbers in the modified linked list. Also, keep the order of even and odd numbers same.
2. Write a Count() function that counts the number of times a given int occurs in a list. The code for this has the classic list traversal structure as demonstrated in Length().
3. Write a Pop() function that is the inverse of Push(). Pop() takes a non-empty list, deletes the head node, and returns the head node's data. If all you ever used were Push() and Pop(), then our linked list would really look like a stack. However, we provide more general functions like GetNth() which what make our linked list more than just a stack. Pop() should assert() fail if there is not a node to pop.
4. Write a SortedInsert() function which given a list that is sorted in increasing order, and a single node, inserts the node into the correct sorted position in the list. While Push() allocates a new node to add to the list, SortedInsert() takes an existing node, and just rearranges pointers to insert it into the list.
5. Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once.

## Problems on Stack
1. Delete the middle element of the stack. Given a stack with push(), pop(), empty() operations, delete middle of it without using any additional data structure.
2. Print Bracket Number. Given an expression exp of length n consisting of some brackets. The task is to print the bracket numbers when the expression is being parsed.
3. Given array A[ ] of integers, the task is to complete the function findMaxDiff which finds the maximum absolute difference between nearest left and right smaller element of every element in array.If the element is the leftmost element, nearest smaller element on left side is considered as 0. Similarly if the element is the rightmost elements, smaller element on right side is considered as 0.
4. Given an array A of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array. If no such element exists, output -1.
5. Given an array of integers, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.

## Problems on Binary Tree
1. Given a Binary Tree you need to find maximum value which you can get by subtracting value of node B from value of node A, where A and B are two nodes of the binary tree and A is an ancestor of B . You are required to complete the function maxDiff . You should not read any input from stdin/console. There are multiple test cases. For each test case, this method will be called individually.
2. Given a Complete Binary tree, print the level order traversal in sorted order.
3. Given a binary tree, your task is to complete the function findRightSibling(), that should return the right sibling to a given node if it doesn’t exist return null.
4. Given a binary tree of size N and two nodes. Your task is to complete the function NumberOFTurn() that should return the count of the number of turns needs to reach from one node to another node of the Binary tree.
5. Given a binary tree of size N+1, your task is to complete the function tiltTree(), that return the tilt of the whole tree. The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null nodes are assigned tilt to be zero. Therefore, tilt of the whole tree is defined as the sum of all nodes’ tilt.

## Problems on Binary Searh Tree
1. Given a binary tree, Your task is to complete the function largestBst that returns the size of the largest subtree which is also a Binary Search Tree (BST). If the complete Binary Tree is BST, then return the size of whole tree.
2. Given a Binary Search Tree (BST) and a node no 'x' , your task is to delete the node 'x' from the BST . You are required to complete the function deleteNode. You should not read any input from stdin/console. There are multiple test cases. For each test case, this method will be called individually.
3. Given two BST, Your task is to complete the function merge which prints the elements of both BSTs in sorted form.
4. Given a binary tree, return true if it is BST, else false. For example, the following tree is not BST, because 11 is in left subtree of 10.
5. Given a binary tree, return true if it is BST, else false. For example, the following tree is not BST, because 11 is in left subtree of 10.

## Problems on Graph
1. Given a graph, check whether it is Biconnected or not.
2. Mayank once came to New Delhi for an International Mathematics Conference. His mathematics skills were a great topic of discussion in those days. So a mathematician Harsh “Challenged” Mayank for a competition and Mayank accepted it.<br />Rules: They will ask 3 questions each and the one who will give all the answers right will be the winner.<br />Mayank answered all the questions very easily. Now its time for Harsh to answer the questions but Harsh was confused by the very first question now you have to help so let's read the question.<br />Question: Mayank asked that you are in a beautiful Castle which is huge and contains ’N’ number of rooms and each room contains 'M' path to ‘M’ other rooms. There may be only one path which connects two room i.e either one path or no path. Mayank asked that you have to find whether you can reach back to the room from which you started after travelling all the paths but note that once you travel a path, then it will be closed and make sure all the rooms are travelled atleast once. In general all paths are to be travelled exactly once and each room must be travelled atleast once. Note: If any room is not connected print False and if there is only one room then print True.
3. Given N * M string array of O's and X's<br />Return the number of 'X' total shapes. 'X' shape consists of one or more adjacent X's (diagonals not included).
4. Given a connected acyclic graph with N nodes and N-1 edges, find out the pair of nodes that are at even distance from each other.
5. Given a directed graph your task is to complete the method isCycle to detect if there is a cycle in the graph or not. You should not read any input from stdin/console.