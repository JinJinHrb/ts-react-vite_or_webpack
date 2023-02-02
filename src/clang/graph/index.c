//设置默认的顶点个数
#define Default_Vertex_Size 10
//数据类型
#define T char
//邻接矩阵图结构
typedef struct GraphMtx
{
  int MaxVertices; //最大顶点数
  int NumVertices; //真实的顶点数
  int NumEdges;    //边数

  T *VerticesList; //顶点列表
  int **Edge;      //边信息矩阵
} GraphMtx;

//图的初始化
void InitGraph(GraphMtx *g)
{
  g->MaxVertices = Default_Vertex_Size; //最大顶点数初始化
  g->NumVertices = g->NumEdges = 0;     //实际顶点数初始化

  //分配顶点存储列表的空间
  g->VerticesList = (T *)malloc(sizeof(T) * (g->MaxVertices));
  assert(g->VerticesList != NULL);

  //开辟边信息存储矩阵的空间（二维数组的动态开辟）
  g->Edge = (int **)malloc(sizeof(int *) * g->MaxVertices); //总行数的开辟
  assert(g->Edge != NULL);
  for (int i = 0; i < g->MaxVertices; ++i) //每一行内具体的空间开辟
  {
    g->Edge[i] = (int *)malloc(sizeof(int) * g->MaxVertices);
  }
  for (i = 0; i < g->MaxVertices; ++i) //初始化
  {
    for (int j = 0; j < g->MaxVertices; ++j)
    {
      g->Edge[i][j] = 0;
    }
  }
}
