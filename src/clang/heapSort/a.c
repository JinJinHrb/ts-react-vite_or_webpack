/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>

//单个记录的结构体
typedef struct
{
  int key;
} SqNote;
//记录表的结构体
typedef struct
{
  SqNote *r;
  int length;
} SqList;

//交换两个记录的位置
void swap(SqNote *a, SqNote *b)
{
  /* int key=a->key;
  a->key=b->key;
  b->key=key; */
  a->key = a->key ^ b->key;
  b->key = a->key ^ b->key;
  a->key = a->key ^ b->key;
}

//将以 r[s]为根结点的子树构成堆，堆中每个根结点的值都比其孩子结点的值大
/**
 * @param H 二叉树引用
 * @param s 子树的根节点对应下标
 * @param m 子树的节点数
 */
void HeapAdjust(SqList *H, int s, int m)
{
  SqNote rc = H->r[s]; //先对操作位置上的结点数据进行保存，放置后序移动元素丢失。
  //对于第 s 个结点，筛选一直到叶子结点结束
  for (int j = 2 * s; j <= m; j *= 2)
  {
    //找到值最大的孩子结点
    if (j + 1 < m && (H->r[j].key < H->r[j + 1].key))
    {
      j++;
    }
    //如果当前结点比最大的孩子结点的值还大，则不需要对此结点进行筛选，直接略过
    if (!(rc.key < H->r[j].key))
    {
      break;
    }
    //如果当前结点的值比孩子结点中最大的值小，则将最大的值移至该结点，由于 rc 记录着该结点的值，所以该结点的值不会丢失
    H->r[s] = H->r[j];
    printf("%d to %d: \n", j, s);
    for (int i = 1; i <= H->length; i++)
    {
      printf("%d ", H->r[i].key);
    }
    printf("\n");
    s = j; // s相当于指针的作用，指向其孩子结点，继续进行筛选
  }
  H->r[s] = rc; //最终需将rc的值添加到正确的位置
  printf("H->r[s]=rc\n");
  for (int i = 1; i <= H->length; i++)
  {
    printf("%d ", H->r[i].key);
  }
  printf("\n\n");
}

/**
 * @brief 大顶堆
 *
 * @param H
 */
void HeapSort(SqList *H)
{
  // 从倒数第二行最右节点开始构建堆的过程
  for (int i = H->length / 2; i > 0; i--)
  {
    //对于有孩子结点的根结点进行筛选
    HeapAdjust(H, i, H->length);
  }
  printf("==========\n\n");
  //通过不断地筛选出最大值，同时不断地进行筛选剩余元素
  for (int i = H->length; i > 1; i--)
  {
    //交换过程，即为将选出的最大值进行保存大表的最后，同时用最后位置上的元素进行替换，为下一次筛选做准备
    swap(&(H->r[1]), &(H->r[i]));
    //进行筛选次最大值的工作
    HeapAdjust(H, 1, i - 1);
  }
}

int main()
{
  int matrix[] = {49, 38, 28, 76, 13, 27, 88, 11, 57, 34};
  int matrxLength = sizeof(matrix) / sizeof(matrix[0]);
  for (int i = 0; i < matrxLength; i++)
  {
    printf("%d ", matrix[i]);
  }
  printf("\n");
  SqList *L = (SqList *)malloc(sizeof(SqList));
  L->length = matrxLength;
  L->r = calloc(L->length + 1, sizeof(SqNote));
  for (int i = 0; i < matrxLength + 1; i++)
  {
    L->r[i + 1].key = matrix[i];
  }
  HeapSort(L);
  for (int i = 1; i <= L->length; i++)
  {
    printf("%d ", L->r[i].key);
  }
  return 0;
}