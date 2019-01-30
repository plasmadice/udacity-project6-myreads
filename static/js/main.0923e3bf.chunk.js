(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),s=a.n(r),c=a(5),l=a(6),i=a(8),u=a(7),h=a(9),d=a(11),m="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:k},f=function(){return fetch("".concat(m,"/books"),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.books})},p=function(e,t){return fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e){return fetch("".concat(m,"/search"),{method:"POST",headers:Object(d.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},E=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selected:"",currentShelf:""},a.handleChange=function(e){p({id:e.target.id},e.target.value),"none"!==a.state.selected&&a.props.removeBook(e.target.id,a.state.selected),a.setState({currentShelf:e.target.value})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({selected:this.props.book.shelf,currentShelf:this.props.shelf})}},{key:"render",value:function(){var e=this.props.book,t=this.state.currentShelf;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"".concat(e.imageLinks?"url(".concat(e.imageLinks.thumbnail,")"):"url(https://books.google.com/books/content?id=1&printsec=frontcover&img=1&zoom=1&source=gbs_api)")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{id:e.id,onChange:this.handleChange,value:t},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading",disabled:"currentlyReading"===t},"Currently Reading"),o.a.createElement("option",{value:"wantToRead",disabled:"wantToRead"===t},"Want to Read"),o.a.createElement("option",{value:"read",disabled:"read"===t},"Read"),o.a.createElement("option",{value:"none",disabled:"none"===t},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors&&e.authors.map(function(t,a){return e.authors.length!==a+1?"".concat(t,", "):t})))}}]),t}(n.Component)),g=a(29),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",books:[],shelvedBooks:[]},a.fetchBooks=function(e){e.length<2?a.setState({books:[]}):v(e).then(function(e){a.setState({books:e})})},a.handleChange=function(e){a.setState({query:e.target.value})},a.componentDidUpdate=function(e,t){t.query!==a.state.query&&a.fetchBooks(a.state.query)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=[];f().then(function(t){t.map(function(t){return e.push({id:t.id,shelf:t.shelf})})}),this.setState({shelvedBooks:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(g.a,{to:"/",className:"close-search",onClick:this.props.handleClick},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:this.handleChange,value:this.state.query}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.books&&this.state.books[0]&&this.state.books.map(function(t){var a=e.state.shelvedBooks.filter(function(e){return e.id===t.id});return t.shelf="none",o.a.createElement("li",{key:t.id},o.a.createElement(E,{book:t,shelf:a[0]?a[0].shelf:"none"}))}))))}}]),t}(n.Component),N=function(e){var t=e.books,a=e.shelfName,n=e.removeBook;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},a),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(E,{book:e,removeBook:n}))}))))},j=a(30),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:{currentlyReading:[],wantToRead:[],read:[]},updated:!1},a.fetchBooks=function(){f().then(function(e){var t={currentlyReading:[],wantToRead:[],read:[]};e.map(function(e){return t[e.shelf].push(e)}),a.setState({books:t})})},a.removeBook=function(e,t){var n={};Object.assign(n,a.state.books),n[t]=a.state.books[t].filter(function(t){return t.id!==e}),a.setState({books:n,updated:!0})},a.componentDidMount=function(){a.fetchBooks()},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.fetchBooks()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.updated&&Object.keys(this.state.books).length&&(this.setState({updated:!1}),setTimeout(function(){return e.fetchBooks()},500))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(j.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(N,{shelfName:"Currently Reading",books:e.state.books.currentlyReading,removeBook:e.removeBook}),o.a.createElement(N,{shelfName:"Want to Read",books:e.state.books.wantToRead,removeBook:e.removeBook}),o.a.createElement(N,{shelfName:"Read",books:e.state.books.read,removeBook:e.removeBook}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(g.a,{to:"/search"},"Add a Book")))}}),o.a.createElement(j.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(y,{handleClick:e.handleClick.bind(e)})}}))}}]),t}(o.a.Component),B=(a(26),a(31));s.a.render(o.a.createElement(B.a,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.0923e3bf.chunk.js.map