#include <stdio.h>
#include <stdlib.h>

void insert(int arr[], int temp[], int n)
{
  int i, first, final, k;
  first = final = 0; //分别记录temp数组中最大值和最小值的位置
  temp[0] = arr[0];
  for (i = 1; i < n; i++)
  {
    // 待插入元素比最小的元素小
    if (arr[i] < temp[first])
    {
      first = (first - 1 + n) % n;
      temp[first] = arr[i];
    }
    // 待插入元素比最大元素大
    else if (arr[i] > temp[final])
    {
      final = (final + 1 + n) % n;
      temp[final] = arr[i];
    }
    // 插入元素比最小大，比最大小
    else
    {
      k = (final + 1 + n) % n;
      //当插入值比当前值小时，需要移动当前值的位置
      while (temp[(k - 1 + n) % n] > arr[i])
      {
        temp[(k + n) % n] = temp[(k - 1 + n) % n];
        k = (k - 1 + n) % n;
      }
      //插入该值
      temp[(k + n) % n] = arr[i];
      //因为最大值的位置改变，所以需要实时更新final的位置
      final = (final + 1 + n) % n;
    }
  }
  // 将排序记录复制到原来的顺序表里
  for (k = 0; k < n; k++)
  {
    arr[k] = temp[(first + k) % n];
  }
}

int main()
{
  int a[40] = {109,
               736,
               276,
               421,
               891,
               952,
               475,
               793,
               588,
               550,
               947,
               90,
               333,
               245,
               417,
               660,
               835,
               681,
               328,
               337,
               618,
               237,
               358,
               395,
               600,
               777,
               649,
               162,
               214,
               786,
               966,
               986,
               444,
               462,
               184,
               209,
               239,
               872,
               647,
               24};
  int temp[40];
  insert(a, temp, 40);
  for (int i = 0; i < 40; i++)
  {
    printf("%d ", a[i]);
  }
  return 0;
}