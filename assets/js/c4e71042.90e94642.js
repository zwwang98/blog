"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3813],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"passing-props-to-a-component",title:"Passing Props to a Component",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},p=void 0,l={permalink:"/blog/passing-props-to-a-component",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-13-passing-props-to-a-component/index.md",source:"@site/blog/2022-07-13-passing-props-to-a-component/index.md",title:"Passing Props to a Component",description:"This is my personal notes on React Docs(Beta) - Passing Props to a Component.  If interested, check whole series here.",date:"2022-07-13T00:00:00.000Z",formattedDate:"July 13, 2022",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React Docs(Beta) Personal Notes",permalink:"/blog/tags/react-docs-beta-personal-notes"}],readingTime:4.615,truncated:!1,authors:[{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"}],frontMatter:{slug:"passing-props-to-a-component",title:"Passing Props to a Component",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},prevItem:{title:"Conditional Rendering",permalink:"/blog/conditional-rendering"},nextItem:{title:"Rendering Lists",permalink:"/blog/rendering-lists"}},c={authorsImageUrls:[void 0]},u=[{value:"What are props and why we need to pass them?",id:"what-are-props-and-why-we-need-to-pass-them",level:2},{value:"How to pass props?",id:"how-to-pass-props",level:2},{value:"Pass props inside JSX tag",id:"pass-props-inside-jsx-tag",level:3},{value:"Read props in React functional component as function&#39;s inputs",id:"read-props-in-react-functional-component-as-functions-inputs",level:3},{value:"Specifying a default value for a prop",id:"specifying-a-default-value-for-a-prop",level:3},{value:"Forward props with JSX spread syntax",id:"forward-props-with-jsx-spread-syntax",level:3},{value:"Passing JSX as children",id:"passing-jsx-as-children",level:3},{value:"Recap",id:"recap",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("Avatar"),h=d("Card"),g={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is my personal notes on React Docs(Beta) - ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-props-to-a-component"},"Passing Props to a Component"),".  If interested, check whole series ",(0,o.kt)("a",{parentName:"p",href:"https://zwwang98.github.io/blog/react-docs-beta-notes"},"here"),"."),(0,o.kt)("h2",{id:"what-are-props-and-why-we-need-to-pass-them"},"What are props and why we need to pass them?"),(0,o.kt)("p",null,"The official ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-props-to-a-component"},"docs")," says that:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an ",(0,o.kt)("inlineCode",{parentName:"p"},"<img>"),":"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'function Avatar() {\n  return (\n    <img\n      className="avatar"\n      src="https://i.imgur.com/1bX5QH6.jpg"\n      alt="Lin Lanying"\n      width={100}\n      height={100}\n    />\n  );\n}\n'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"React component use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.")),(0,o.kt)("p",null,"This reminds me ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a"},"one of Dan Abramov's blogs"),". He said in a similar but more specific way:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Now that we\u2019re not surprised by virtual DOM anymore and it is being adopted by other frameworks and libraries, we can focus on examining React\u2019s true strengths: composition, unidirectional data flow, freedom from DSLs, explicit mutation and static mental model.")),(0,o.kt)("p",null,"The point is that using props to do communication work means that the communication is unidirectional. One comopnent could only pass information down, not up or to any other component of another branch of the whole React tree."),(0,o.kt)("h2",{id:"how-to-pass-props"},"How to pass props?"),(0,o.kt)("p",null,'When saying "pass", it means that we have at least two objects. One is going to pass something and the other is going to receive it.'),(0,o.kt)("h3",{id:"pass-props-inside-jsx-tag"},"Pass props inside JSX tag"),(0,o.kt)("p",null,"First, pass some props to Avatar. For example, let\u2019s pass two props: person (an object), and size (a number):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export default function Profile() {\n  return (\n    <Avatar\n      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}\n      size={100}\n    />\n  );\n}\n")),(0,o.kt)("p",null,"Now you can read these props inside the Avatar component."),(0,o.kt)("h3",{id:"read-props-in-react-functional-component-as-functions-inputs"},"Read props in React functional component as function's inputs"),(0,o.kt)("p",null,"We could either declare ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_a_function_parameter"},"destruct")," ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," in separate variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Without destructing\nfunction Avatar(props) {\n  // person and size are available inside props\n  // props.person\n  // props.size\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// With destructing\nfunction Avatar({ person, size }) {\n  // person and size are available here\n}\n")),(0,o.kt)("h3",{id:"specifying-a-default-value-for-a-prop"},"Specifying a default value for a prop"),(0,o.kt)("p",null,"If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function Avatar({ person, size = 100 }) {\n  // ...\n}\n")),(0,o.kt)("p",null,"Now, if ",(0,o.kt)("inlineCode",{parentName:"p"},"<Avatar person={...} />")," is rendered with no size prop, the size will be set to 100."),(0,o.kt)("p",null,"The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used."),(0,o.kt)("h3",{id:"forward-props-with-jsx-spread-syntax"},"Forward props with JSX spread syntax"),(0,o.kt)("p",null,"When one component doesn't touch anything in the incoming props besides passing them down, we could consider using spread syntax to make it more concise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Using spread syntax\nfunction Profile(props) {\n  return (\n    <div className="card">\n      <Avatar {...props} />\n    </div>\n  );\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Not using spread syntax\nfunction Profile({ person, size, isSepia, thickBorder }) {\n  return (\n    <div className="card">\n      <Avatar\n        person={person}\n        size={size}\n        isSepia={isSepia}\n        thickBorder={thickBorder}\n      />\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Although it seems more concise, it indicates another problem - do we really need to design our components this way?\nMaybe we need to split things up so that we could pass props to whoever truly need them."),(0,o.kt)("h3",{id:"passing-jsx-as-children"},"Passing JSX as children"),(0,o.kt)("p",null,"When you nest content inside a JSX tag, the parent component will receive that content in a prop called children.\nFor example, the Card component below will receive a children prop set to ",(0,o.kt)(m,{mdxType:"Avatar"})," and render it in a wrapper div:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import Avatar from \'./Avatar.js\';\n\nfunction Card({ children }) {\n  return (\n    <div className="card">\n      {children}\n    </div>\n  );\n}\n\nexport default function Profile() {\n  return (\n    <Card>\n      {"Das"}\n    </Card>\n  );\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { getImageUrl } from './utils.js';\n\nexport default function Avatar({ person, size }) {\n  return (\n    <img\n      className=\"avatar\"\n      src={getImageUrl(person)}\n      alt={person.name}\n      width={size}\n      height={size}\n    />\n  );\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export function getImageUrl(person, size = 's') {\n  return (\n    'https://i.imgur.com/' +\n    person.imageId +\n    size +\n    '.jpg'\n  );\n}\n")),(0,o.kt)("p",null,"You can think of a component with a children prop as having a \u201chole\u201d that can be \u201cfilled in\u201d by its parent components with arbitrary JSX. You will often use the children prop for visual wrappers: panels, grids, and so on."),(0,o.kt)("p",null,"This part reminds me of real-world code. I used Meta's Docusaurus to build my personal blog, which is just current website you are visiting.\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages/index.tsx")," file, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layout>")," component and it is doing exactly the samething we mentioned above - acts as a container and is filled with whatever children passed into it. I found a possible repo for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layout>")," component at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/73ee356949e6baf70732c69cf6be8d8919f3f75a/packages/docusaurus-theme-classic/src/theme/Layout/index.tsx"},"here"),"."),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To pass props, add them to the JSX, just like you would with HTML attributes."),(0,o.kt)("li",{parentName:"ul"},"To read props, use the function Avatar({ person, size }) destructuring syntax."),(0,o.kt)("li",{parentName:"ul"},"You can specify a default value like size = 100, which is used for missing and undefined props."),(0,o.kt)("li",{parentName:"ul"},"You can forward all props with <Avatar {...props} /> JSX spread syntax, but don\u2019t overuse it!"),(0,o.kt)("li",{parentName:"ul"},"Nested JSX like ",(0,o.kt)(h,{mdxType:"Card"},(0,o.kt)(m,{mdxType:"Avatar"}))," will appear as Card component\u2019s children prop."),(0,o.kt)("li",{parentName:"ul"},"Props are read-only snapshots in time: every render receives a new version of props."),(0,o.kt)("li",{parentName:"ul"},"You can\u2019t change props. When you need interactivity, you\u2019ll need to set state.")))}f.isMDXComponent=!0}}]);