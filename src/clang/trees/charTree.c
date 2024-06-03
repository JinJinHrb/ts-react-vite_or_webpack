#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ALPHABET_SIZE 26

typedef struct TrieNode
{
  struct TrieNode *children[ALPHABET_SIZE];
  bool isEndOfWord;
} TrieNode;

TrieNode *createNode()
{
  TrieNode *newNode = (TrieNode *)malloc(sizeof(TrieNode));
  newNode->isEndOfWord = false;
  for (int i = 0; i < ALPHABET_SIZE; i++)
  {
    newNode->children[i] = NULL;
  }
  return newNode;
}

void insert(TrieNode *root, const char *word)
{
  TrieNode *curr = root;
  while (*word)
  {
    int index = *word - 'a';
    if (!curr->children[index])
    {
      curr->children[index] = createNode();
    }
    curr = curr->children[index];
    word++;
  }
  curr->isEndOfWord = true;
}

bool search(TrieNode *root, const char *word)
{
  TrieNode *curr = root;
  while (*word)
  {
    int index = *word - 'a';
    if (!curr->children[index])
    {
      return false;
    }
    curr = curr->children[index];
    word++;
  }
  return curr->isEndOfWord;
}

int main()
{
  TrieNode *root = createNode();
  insert(root, "hello");
  insert(root, "world");

  printf("Searching for 'hello': %s\n", search(root, "hello") ? "Found" : "Not Found");
  printf("Searching for 'world': %s\n", search(root, "world") ? "Found" : "Not Found");
  printf("Searching for 'hell': %s\n", search(root, "hell") ? "Found" : "Not Found");

  // Free the allocated memory (omitted for brevity)

  return 0;
}