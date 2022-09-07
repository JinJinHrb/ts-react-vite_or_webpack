/******************************************************************************


Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.


*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int qusort(int s[], int start, int end) //自定义函数 qusort()
{
  int low, high;   //定义变量为基本整型
  low = start;     //将每组首个元素赋给i
  high = end;      //将每组末尾元素赋给j
  s[0] = s[start]; //设置基准值
  while (low < high)
  {
    while (low < high && s[0] < s[high])
      high--; //位置左移
    if (low < high)
    {
      s[low] = s[high]; //将s[high]放到s[low]的位置上
      low++;            //位置右移
    }
    while (low < high && s[low] <= s[0])
      low++; //位置右移
    if (low < high)
    {
      s[high] = s[low]; //将大于基准值的s[high]放到s[low]位置
      high--;           //位置左移
    }
  }
  s[low] = s[0]; //将基准值放入指定位置
  if (start < low)
  {
    printf("#38 start(%d) < low(%d), high(%d)\n", start, low, high);
    qusort(s, start, high - 1); //对分割出的部分递归调用qusort()函数
  }
  if (low < end)
  {
    printf("#42 low(%d) < end(%d), high(%d)\n", low, end, high);
    qusort(s, high + 1, end);
  }
  return 0;
}

int main()
{
  // int a[11];
  // printf("请输入10个数：\n");
  // for(i=1;i<=10;i++)
  //     scanf("%d",&a[i]);    //从键盘中输入10个要进行排序的数
  int a[] = {0, 49, 38, 28, 76, 13, 27, 88, 11, 57, 34};
  qusort(a, 1, 10); //调用qusort()函数进行排序
  int i;            //定义数组及变量为基本整型
  printf("排序后的顺序是: \n");
  for (i = 1; i <= 10; i++)
    printf("%5d", a[i]); //输出排好序的数组
  printf("\n");
  return 0;
}