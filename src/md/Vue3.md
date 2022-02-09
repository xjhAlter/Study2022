# Vue3

### 1、props 设置默认值

```
interface {
    title: string
    msg?: string
}

// withDefaults 的第二个参数是默认参数设置
const props = withDefaults(defineProps<Props>(), {
    msg: '默认信息',
})
```
