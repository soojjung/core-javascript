# 주제 : 불변 객체 (immutable object)

## 날짜 : 2024-01-07

## 예제

```
const a = {
    test: "hey"
}

const b = {
    test: "hey"
}

console.log(a === b) // false
```

```
const a = { 이름: 정수연, 나이: 20살, 직업: 선생님 }
const b = { 이름: 정수연, 나이: 20살, 직업: 선생님 }
a.job = "a"

console.log(b.job) // undefined
```

```
const o = { x: { y: 1 } }
const c1 = { ...o }

console.log(o === c1) // false

c1.b = "a"
console.log(o.b) // undefined

console.log(o.x === c1.x) // true


c1.x.test = "b"
console.log(o.x.test) // "b"
```

참고) spread 연산자는 얕은 복사이다.

```
const o = { x: 1 }
const p = o

console.log(o === p) // true
```

```
const o = { x: { y: 1 } }
const p = o

console.log(o === p) // true
```

```
const a = {
    test: "hey"
}

const b = {
    test: "hey"
}

console.log(a == b) // true
```

```
const person1 = { name: "Lee" }
const person2 = { name: "Lee" }

console.log(person1 === person2) // false
console.log(person1.name === person2.name) // true
```

### Object의 메소드

Object.freeze

```
const a = {}
a.b = "a"

Object.freeze(a)
=> freeze한 이후부터 a에 대한 수정이 불가하다.
```

defineProperty

```
const a = {}
b: "test"
a.b = "test"

위 방법을 똑같지만 보다 명시적으로 아래와 같이 쓸 수 있다.

Object.defineProperty(a, "b", {value: "test"})
console.log(a.b) // "test"
```

```
const coke = { name: "cola" }
const pepsi = { name: "cola" }
coke.name = "pepsi"

console.log(pepsi.name) // "cola"
```

```
const coke = { name: "cola" }
const pepsi = coke
pepsi.name = "pepsi"

console.log(coke.name) // "pepsi"
```

```
const coke = { name: "cola" }
const pepsi = { ...coke }

coke.name = "pepsi"
console.log(pepsi.name) // "cola"
```
