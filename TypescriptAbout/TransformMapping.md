```typescript
// 1. 映射类型定义（仅处理字符串键）
type Mapping<Source, Target> = {
  [K in keyof Source]: {
    key: keyof Target & string; // 确保目标键为字符串类型
    // 可选转换函数（仅处理同类型转换）
    transform?: (value: Source[K]) => Target[keyof Target & string];
    reverseTransform?: (value: Target[keyof Target & string]) => Source[K];
  };
};

// 2. 定义数据类型（不含日期字段）
interface ApiData {
  UserName: string;
  Age: number;
  Email_Address: string;
  Is_Active: boolean;
}

interface LocalData {
  userName: string;
  age: number;
  email: string;
  isActive: boolean;
}

// 3. 定义映射规则（无日期相关转换）
const mapping: Mapping<ApiData, LocalData> = {
  UserName: { key: 'userName' },
  Age: { key: 'age' },
  Email_Address: { key: 'email' },
  Is_Active: { key: 'isActive' }
};

// 4. 正向转换函数
function transform<Source, Target>(
  source: Source,
  mapping: Mapping<Source, Target>
): Target {
  const result = {} as Target;
  
  (Object.keys(mapping) as (keyof Source)[]).forEach(key => {
    const { key: targetKey, transform } = mapping[key];
    const value = source[key];
    
    if (transform) {
      result[targetKey] = transform(value) as Target[typeof targetKey];
    } else {
      result[targetKey] = value as unknown as Target[typeof targetKey];
    }
  });
  
  return result;
}

// 5. 反向转换函数
function reverseTransform<Source, Target>(
  source: Target,
  mapping: Mapping<Source, Target>
): Source {
  const result = {} as Source;
  
  (Object.keys(mapping) as (keyof Source)[]).forEach(key => {
    const { key: targetKey, reverseTransform } = mapping[key];
    const value = source[targetKey] as Target[keyof Target & string];
    
    if (reverseTransform) {
      result[key] = reverseTransform(value);
    } else {
      result[key] = value as unknown as Source[typeof key];
    }
  });
  
  return result;
}

// 6. 使用示例
const apiData: ApiData = {
  UserName: 'SunQi',
  Age: 40,
  Email_Address: 'sunqi@example.com',
  Is_Active: true
};

// API → 本地
const localData = transform(apiData, mapping);
console.log(localData); // "SunQi"


// 本地 → API
const updatedLocalData: LocalData = {
  ...localData,
  age: 41,
  email: 'updated-sunqi@example.com'
};

const updatedApiData = reverseTransform(updatedLocalData, mapping);
console.log(updatedApiData); // 41
```
