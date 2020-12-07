# movieql
Movie API with Graphql

### information
1. start: yarn start
2. url: localhost:4000
3. todo:
- movie API를 호출하여 영화 정보를 읽는다.
4. description:
- graphql-yoga 모듈에는 playground 콘솔이 내장되어있어서 url에 접속하여 데이터 스키마와 query를 테스트 해볼 수 있다.
- ES6문법을 사용하기 위해 .babelrc 파일에 설치한 babel 모듈을 설정한다.

### useful
1. over-fetching 방지 - 필요한 필드만 조회
```
query{
  movies{
    id
    title
  }
}
```

2. under-fetching 방지 - 한번의 요청으로 두가지 기능
```
query{
  movie(id: 24583){
    title
    rating
    description_intro
  }
  suggestions(id: 24583){
    medium_cover_image
    rating
  }
}
```
