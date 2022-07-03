
#include <stdio.h>

/* 交换元素 */
void swap(int array[], int i, int j)
{
  int temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

void printArray(int array[], int len)
{
  for (int i = 0; i < len; i++)
  {
    printf("%d  ", array[i]);
  }
  printf("\n");
}

/* 调整堆 */
void heap_ajust(int arr[], int start, int end)
{
  //建立父节点下标和子节点下标
  int dad = start;
  int son = dad * 2 + 1;
  printf("start: %d, end: %d, son: %d\n", start, end, son);
  printArray(arr, 10);
  while (son <= end)
  {
    printf("arr[%d]: %d, arr[%d]: %d, arr[%d]: %d\n", dad, arr[dad], son, arr[son], son + 1, arr[son + 1]);
    if (son + 1 <= end && arr[son] < arr[son + 1]) //先比较两個子节点大小，选择最大的
      son++;
    if (arr[dad] > arr[son]) //如果父节点大于子节点代表调整完毕，直接跳出函数
      return;
    else
    { //否则交换父子內容再继续子节点和孙节点比较
      printf("before swap: dad: %d, son: %d\n", dad, son);
      swap(arr, dad, son);
      dad = son;
      son = dad * 2 + 1;
      printf("after swap: dad: %d, son: %d\n", dad, son);
    }
  }
}

/* 堆排序 */
void heap_sort(int arr[], int len)
{
  int i;
  //初始化堆，i从最后一個父节点开始调整
  // 建立最大堆
  for (i = len / 2 - 1; i >= 0; i--)
  {
    heap_ajust(arr, i, len - 1);
  }
  //先将第一個元素和已排好元素前一位做交换，再从新调整，直到排序完毕
  for (i = len - 1; i > 0; --i)
  {

    swap(arr, 0, i);
    heap_ajust(arr, 0, i - 1);
  }
}

int main(int argc, char const *argv[])
{

  // int arr[] = {1, 34, 6, 21, 98, 31, 7, 4, 36, 47, 39, 45, 5, 2};
  int arr[] = {49, 38, 28, 76, 13, 27, 88, 11, 57, 34};
  int length = sizeof(arr) / sizeof(int);
  /* sort */
  heap_sort(arr, length);

  /* print Array */
  printArray(arr, length);

  return 0;
}
