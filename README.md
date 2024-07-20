# <h1>Potter</h1>

* Проект представляет собой карточки героев вселенной Гарри Поттера.
* Использовано [HP-API // The Harry Potter API](https://hp-api.onrender.com/). 
* [Посмотреть проект](https://potter-nu.vercel.app/).

## Реализованы следующие требования к функциональности:

-   [x] Реализованы Требования к функциональности
-   [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется [localStorage](https://github.com/Lisowez/Potter/blob/develop/potter/src/utils/workUser/forWorkWithUser.tsx)

#### React

-   [x] Пишем функциональные компоненты с хуками в приоритете над классовыми.
-   [x] Есть разделение на [умные](https://github.com/Lisowez/Potter/blob/develop/potter/src/pages/History/History.tsx) и [глупые](https://github.com/Lisowez/Potter/blob/develop/potter/src/components/Buttons/HeaderButton.tsx) компоненты
-   [x] Есть [рендеринг списков](https://github.com/Lisowez/Potter/blob/develop/potter/src/pages/Home/Home.tsx)
-   [x] Реализована хотя бы одна [форма](https://github.com/Lisowez/Potter/blob/develop/potter/src/components/Forms/Form.tsx)
-   [x] Есть применение [Контекст API](https://github.com/Lisowez/Potter/blob/develop/potter/src/App.tsx)
-   [x] Есть применение [предохранителя](https://github.com/Lisowez/Potter/blob/develop/potter/src/App.tsx)
-   [x] Есть хотя бы один [кастомный хук](https://github.com/Lisowez/Potter/blob/develop/potter/src/pages/Header/useUserLogin.tsx)
-   [x] Хотя бы несколько компонентов используют PropTypes: [HeaderButton](https://github.com/Lisowez/Potter/blob/develop/potter/src/components/Buttons/HeaderButton.tsx), [HeroCard](https://github.com/Lisowez/Potter/blob/develop/potter/src/components/HeroCard/HeroCard.tsx)
-   [x] Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/Lisowez/Potter/blob/develop/potter/src/pages/Header/useDebounce.tsx)
-   [x] Есть применение lazy + Suspense: [тут](https://github.com/Lisowez/Potter/blob/develop/potter/src/utils/router.tsx)

#### Redux

-   [x] Используем [Modern Redux with Redux Toolkit](https://github.com/Lisowez/Potter/blob/develop/potter/src/App/store/store.tsx)
-   [x] Используем [слайсы](https://github.com/Lisowez/Potter/blob/develop/potter/src/App/store/userSlice.tsx)
-   [x] Есть хотя бы одна [кастомная мидлвара](https://github.com/Lisowez/Potter/blob/develop/potter/src/App/store/userMiddleware.tsx)
-   [x] Используется [RTK Query](https://github.com/Lisowez/Potter/blob/develop/potter/src/App/store/api/api.tsx)
-   [x] Используется [Transforming Responses](https://github.com/Lisowez/Potter/blob/develop/potter/src/App/store/api/api.tsx)

### 2 уровень (необязательный)

-   [x] Используeтся TypeScript
-   [x] Настроен [CD](https://potter-nu.vercel.app/)

### **Дополнительно**

-   [x] Проект собран при помощи Vite
-   [x] Для создания форм использовал библиотеку `react-hook-form`
-   [x] Использовал библиотеку `react-error-boundary`
-   [x] Использовал библиотеку `react-loader-spinner`

#### **Примечания**
- В API есть повторения героев, не является багом.
- Debounce реализован, но запросов нет, так как ищет в данных, сохраненных в context. Так что просто показано, что именю представление , что такое Debounce и как его использовать.
