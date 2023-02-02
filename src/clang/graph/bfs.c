#include <stdio.h>
#include <stdlib.h>
#define MAX_VERtEX_NUM 20 //顶点的最大数量
#define VRType int        //表示顶点之间关系的数据类型
#define VertexType int    //顶点的数据类型
typedef enum
{
  false,
  true
} bool;                       //定义bool型常量
bool visited[MAX_VERtEX_NUM]; //设置全局数组，记录每个顶点是否被访问过
//队列链表中的结点类型
typedef struct Queue
{
  VertexType data;
  struct Queue *next;
} Queue;
typedef struct
{
  VRType adj; //用 0 表示不相邻，用 1 表示相邻
} ArcCell, AdjMatrix[MAX_VERtEX_NUM][MAX_VERtEX_NUM];
typedef struct
{
  VertexType vexs[MAX_VERtEX_NUM]; //存储图中的顶点
  AdjMatrix arcs;                  //二维数组，记录顶点之间的关系
  int vexnum, arcnum;              //记录图的顶点数和弧（边）数
} MGraph;
//判断 v 顶点在二维数组中的位置
int LocateVex(MGraph *G, VertexType v)
{
  int i;
  //遍历一维数组，找到变量v
  for (i = 0; i < G->vexnum; i++)
  {
    if (G->vexs[i] == v)
    {
      break;
    }
  }
  //如果找不到，输出提示语句，返回-1
  if (i > G->vexnum)
  {
    printf("no this vertex\n");
    return -1;
  }
  return i;
}
//构造无向图
void CreateDN(MGraph *G)
{
  int i, j, n, m;
  int v1, v2;
  scanf("%d,%d", &(G->vexnum), &(G->arcnum));
  for (i = 0; i < G->vexnum; i++)
  {
    scanf("%d", &(G->vexs[i]));
  }
  for (i = 0; i < G->vexnum; i++)
  {
    for (j = 0; j < G->vexnum; j++)
    {
      G->arcs[i][j].adj = 0;
    }
  }
  for (i = 0; i < G->arcnum; i++)
  {
    scanf("%d,%d", &v1, &v2);
    n = LocateVex(G, v1);
    m = LocateVex(G, v2);
    if (m == -1 || n == -1)
    {
      printf("no this vertex\n");
      return;
    }
    G->arcs[n][m].adj = 1;
    G->arcs[m][n].adj = 1;
  }
}
int FirstAdjVex(MGraph G, int v)
{
  int i;
  //对于数组下标 v 处的顶点，找到第一个和它相邻的顶点，并返回该顶点的数组下标
  for (i = 0; i < G.vexnum; i++)
  {
    if (G.arcs[v][i].adj)
    {
      return i;
    }
  }
  return -1;
}
int NextAdjVex(MGraph G, int v, int w)
{
  int i;
  //对于数组下标 v 处的顶点，从 w 位置开始继续查找和它相邻的顶点，并返回该顶点的数组下标
  for (i = w + 1; i < G.vexnum; i++)
  {
    if (G.arcs[v][i].adj)
    {
      return i;
    }
  }
  return -1;
}
//初始化队列，这是一个有头结点的队列链表
void InitQueue(Queue **Q)
{
  (*Q) = (Queue *)malloc(sizeof(Queue));
  (*Q)->next = NULL;
}
//顶点元素v进队列
void EnQueue(Queue **Q, VertexType v)
{
  Queue *temp = (*Q);
  //创建一个存储 v 的结点
  Queue *element = (Queue *)malloc(sizeof(Queue));
  element->data = v;
  element->next = NULL;
  //将 v 添加到队列链表的尾部
  while (temp->next != NULL)
  {
    temp = temp->next;
  }
  temp->next = element;
}
//队头元素出队列
void DeQueue(Queue **Q, int *u)
{
  Queue *del = (*Q)->next;
  (*u) = (*Q)->next->data;
  (*Q)->next = (*Q)->next->next;
  free(del);
}
//判断队列是否为空
bool QueueEmpty(Queue *Q)
{
  if (Q->next == NULL)
  {
    return true;
  }
  return false;
}
//释放队列占用的堆空间
void DelQueue(Queue *Q)
{
  Queue *del = NULL;
  while (Q->next)
  {
    del = Q->next;
    Q->next = Q->next->next;
    free(del);
  }
  free(Q);
}
//广度优先搜索
void BFSTraverse(MGraph G)
{
  int v, u, w;
  Queue *Q = NULL;
  InitQueue(&Q);
  //将用做标记的visit数组初始化为false
  for (v = 0; v < G.vexnum; ++v)
  {
    visited[v] = false;
  }
  //遍历图中的各个顶点
  for (v = 0; v < G.vexnum; v++)
  {
    //若当前顶点尚未访问，从此顶点出发，找到并访问和它连通的所有顶点
    if (!visited[v])
    {
      //访问顶点，并更新它的访问状态
      printf("%d ", G.vexs[v]);
      visited[v] = true;
      //将顶点入队
      EnQueue(&Q, G.vexs[v]);
      //遍历队列中的所有顶点
      while (!QueueEmpty(Q))
      {
        //从队列中的一个顶点出发
        DeQueue(&Q, &u);
        //找到顶点对应的数组下标
        u = LocateVex(&G, u);
        //遍历紧邻 u 的所有顶点
        for (w = FirstAdjVex(G, u); w >= 0; w = NextAdjVex(G, u, w))
        {
          //将紧邻 u 且尚未访问的顶点，访问后入队
          if (!visited[w])
          {
            printf("%d ", G.vexs[w]);
            visited[w] = true;
            EnQueue(&Q, G.vexs[w]);
          }
        }
      }
    }
  }
  DelQueue(Q);
}
int main()
{
  MGraph G;
  //构建图
  CreateDN(&G);
  //对图进行广度优先搜索
  BFSTraverse(G);
  return 0;
}