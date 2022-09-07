/******************************************************************************


Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.


*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define MAXSIZE 20
typedef int KeyType;
typedef char InfoType[10];
typedef struct
{
  KeyType key;
  InfoType otherInfo;
} RedType;
typedef struct
{
  //     RedType r[MAXSIZE + 1];
  RedType *r;
  int length;
} SqList;

//希尔排序  按从小到大排序
void ShellSort2(int arr[], int n, int dlta[])
{
  int i, j, k;
  int temp, gap;

  // for (gap = n / 2; gap > 0; gap /= 2){ //步长的选取
  int hLength = sizeof(dlta) / sizeof(dlta[0]);
  for (int h = 0; h < hLength; h++)
  {
    int gap = dlta[h];
    for (i = 0; i < gap; i++)
    {                                    //直接插入排序原理
      for (j = i + gap; j < n; j += gap) //每次加上步长，即按列排序。
        if (arr[j] < arr[j - gap])
        {
          temp = arr[j];
          k = j - gap;
          while (k >= 0 && arr[k] > temp)
          { //记录后移，查找插入位置
            arr[k + gap] = arr[k];
            k -= gap;
          }
          arr[k + gap] = temp; //找到位置插入
        }
    }
  }
  // }
}

int main()
{
  printf("Hello World\n");
  int array[] = {49, 38, 28, 76, 13, 27, 88, 11, 57, 34};
  int length = sizeof(array) / sizeof(array[0]);
  for (int i = 0; i < length; i++)
  {
    printf("%d ", *(array + i));
  }
  printf("\n");

  int t = log(length + 1) / log(2);
  int dlta[t + 1];
  int k = t;
  for (; k > 0; k--)
  {
    dlta[k - 1] = pow(2, t - k + 1) - 1;
  }
  for (int i = 0; i < t; i++)
  {
    printf("%d ", dlta[i]);
  }
  printf("\n");

  // 换一种 dlta 取法
  // int t = log(length - 1) / log(2);
  // printf("t: %d\n", t);
  // int k = t+1;
  // for(; k > 0; k--){
  //     dlta[k-1] = pow(2, t-k) + 1;
  // }
  // for(int i=0; i<t + 1; i++){
  //     printf("%d ", dlta[i]);
  // }
  // printf("\n");

  ShellSort2(array, length, dlta);
  for (int i = 0; i < length; i++)
  {
    printf("%d ", *(array + i));
  }
  return 0;
}