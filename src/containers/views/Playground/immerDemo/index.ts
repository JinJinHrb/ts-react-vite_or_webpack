import { produce } from 'immer'

// API: produce(baseState, recipe: (draftState) => void): nextState

/* 
// 将produce封装到useState中的 useImmer：
import React, { useCallback } from "react";
import { useImmer } from "use-immer";

const TodoList = () => {
  const [todos, setTodos] = useImmer([
    {
      id: "React",
      title: "Learn React",
      done: true
    },
    {
      id: "Immer",
      title: "Try Immer",
      done: false
    }
  ]);

  const handleToggle = useCallback((id) => {
    setTodos((draft) => {
      const todo = draft.find((todo) => todo.id === id);
      todo.done = !todo.done;
    });
  }, []);

  const handleAdd = useCallback(() => {
    setTodos((draft) => {
      draft.push({
        id: "todo_" + Math.random(),
        title: "A new todo",
        done: false
      });
    });
  }, []); 
  */

/* 
// 将produce封装到useState中的 useImmer：
import React, { useCallback } from "react";
import { useImmerReducer } from "use-immer";

const TodoList = () => {
  const [todos, dispatch] = useImmerReducer(
    (draft, action) => {
      switch (action.type) {
        case "toggle":
          const todo = draft.find((todo) => todo.id === action.id);
          todo.done = !todo.done;
          break;
        case "add":
          draft.push({
            id: action.id,
            title: "A new todo",
            done: false
          });
          break;
        default:
          break;
      }
    },
  [ / !* initial todos !* / ]
  );

  */
/* 
  // 配合 redux 使用：
  import {produce} from "immer"  
  
  // Reducer with initial state  
  const INITIAL_STATE = [  
      / !* bunch of todos !* /  
  ]  
    
  const todosReducer = produce((draft, action) => {  
      switch (action.type) {  
      case "toggle":  
          const todo = draft.find(todo => todo.id === action.id)  
          todo.done = !todo.done  
          break  
      case "add":  
          draft.push({  
              id: action.id,  
              title: "A new todo",  
              done: false  
          })  
          break  
      default:  
          break  
      }  
  })
 */

export type FieldForm = {
    fieldName: string
    fieldCode: string
}

type Author = {
    name: string
    phone: string
}

export type RelatedPerson = {
    author: Author
}

export type FormConfig = {
    fieldForm: FieldForm[]
    type: string
    desc: string
    relatedPerson: RelatedPerson
}

/*
  对应 react 中写法：
  const [formConfig,setFormConfig] = useState(...)
  ...
  setFormConfig((prevState) => {
    ...prevState,
    fieldForm:prevState.fieldForm.map((item,idx) => {
        if(idx === selectIndex){
            return {
                ...item,
                fieldName:newName
            }
        }
        return item
    })
  });
*/

// 修改工单的表单第二个字段的名称
export const setFormConfig1 = (prevState: FormConfig, selectIndex: number, newName: string) => {
    return {
        ...prevState,
        fieldForm: prevState.fieldForm.map((item, idx) => {
            if (idx === selectIndex) {
                return {
                    ...item,
                    fieldName: newName
                }
            }
            return item
        })
    }
}

/*
  对应 react 中写法：

  setFormConfig(prevState => {
    return produce(prevState,draft => {  
        draft.fieldForm[1].fieldName = newName
    })
  })
  
  setFormConfig(produce(draft => {  
    draft.fieldForm[1].fieldName = newName
  }))
*/

// 修改工单的表单第二个字段的名称
export const setFormConfig2 = (prevState: FormConfig, selectIndex: number, newName: string) => {
    return produce(prevState, draft => {
        draft.fieldForm[selectIndex].fieldName = newName
    })
}

// 柯里化思想
export const setFormConfig3 = (prevState: FormConfig, selectIndex: number, newName: string) => {
    return produce(draft => {
        draft.fieldForm[selectIndex].fieldName = newName
    })(prevState)
}

export const initForm = (): FormConfig => {
    return {
        type: 'galaxy', // 类型
        desc: 'super modern device', // 描述
        relatedPerson: {
            // 关联负责人
            author: {
                name: 'Alexandra',
                phone: '332-994-554'
            }
        },
        fieldForm: [
            // 字段
            {
                fieldName: 'rom',
                fieldCode: '101'
                //...
            },
            {
                fieldName: 'ram',
                fieldCode: '102'
                //...
            }
        ]
        //...
    }
}

export const testImmer = () => {
    const form = initForm()
    const newForm = setFormConfig3(form, 1, 'cable')
    console.log(newForm)
    alert(`form === newForm: ${form === newForm}\n${JSON.stringify(newForm)}`)
}
