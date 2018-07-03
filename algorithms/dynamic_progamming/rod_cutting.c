#include<stdio.h>
int max( int a, int b ) {
   if ( a > b ) 
     return a;
   else 
     return b;
}

int recursive( int p[],int n ) {
  if ( n == 0 ) 
     return 0;
  int q = -1;
  int i; 
  for( i = 1; i <= n; i++ ) {
    q = max(q, p[i-1] + recursive(p,n-i)); 
  } 
  return q;
}

int cut_rod_mem_aux( int *p, int *s, int n ) {
  if ( n == 0 ) {
    return 0;
  } else {
    if ( s[n-1] != -1 ) {
      return s[n-1];
    } else {
      int i;
      int q = -1;
      for( i = 1; i <= n; i++ ) {
        q = max( q, p[i-1] + cut_rod_mem_aux(p,s,n-i) );
      }
      s[n-1] = q;

      return q;
    }
  }
}

int cut_rod_mem( int *p, int size ) {
  int s[size];
  int i = 0;
  for( ; i < size; i++ ) {
    s[i] = -1;
  }
  return cut_rod_mem_aux( p, s, size );
}

int top_down( int *p, int size ) {
  if( size == 0 ) {
    return 0;
  }
  int s[size+1];
  s[0] = 0;
  int i = 1, j;
  int q = -1;
  for(; i <= size; i++ ) {
    for( j = 1; j <= i; j++ ) {
      q = max(q, p[j-1] + s[i - j]);
    }
    s[i] = q;
  }     
  return s[size];
}

int main() {
  int p[10] = {1,5,8,9,10,17,17,20,24,30};
  printf("Enter value between 1 - 10 : ");
  int d;
  scanf("%d",&d);
  if( d<0 || d > 10 ) {
    printf("Please enter value between 1-10");
    return 1;
  }
  printf("Max Value for %d is %d\n", d, recursive(p,d));
  printf("Max Value by DyP for %d is %d\n", d, cut_rod_mem(p,d));
  printf("Max Value by Topdow for %d is %d\n", d, top_down(p,d));
}
