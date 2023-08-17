import{_ as e,o as i,c as s,f as a}from"./app-2cf624b5.js";const n={},c=a(`<h1 id="promise-总结" tabindex="-1"><a class="header-anchor" href="#promise-总结" aria-hidden="true">#</a> Promise 总结</h1><h2 id="_1-promise-的三种状态" tabindex="-1"><a class="header-anchor" href="#_1-promise-的三种状态" aria-hidden="true">#</a> 1. promise 的三种状态</h2><blockquote><p>promise 只有三种状态，<code>状态一旦改变无法更改</code>。也就是初始化之后 promise 不是 resolved 就是 rejected</p></blockquote><ol><li><p>pending</p><ul><li><p>准备</p></li><li><p>pending 只有初始打印的时候才能看到</p></li></ul></li><li><p>resolved</p><ul><li><p>成功</p></li><li><p>resolved 的结果 只能被 then 调用</p></li></ul></li><li><p>rejected</p><ul><li><p>失败</p></li><li><p>rejected 的结果只能被 catch 调用</p></li></ul></li></ol><h2 id="_2-then、catch-方法" tabindex="-1"><a class="header-anchor" href="#_2-then、catch-方法" aria-hidden="true">#</a> 2. then、catch 方法</h2><blockquote><p>then 和 catch 方法都会返回一个<code>新的 promise</code> ，新的 promise 的状态根据 then/catch 的执行结果确定。</p><p>只要 then/catch 方法中<code>没有报错</code>，那么返回的 promise 状态都为 resolved，反正则为 rejected。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>script start
async1 start 
async2
script end
async1 end
async3
<span class="token keyword">async</span> <span class="token number">1</span> and <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[c];function r(d,t){return i(),s("div",null,l)}const p=e(n,[["render",r],["__file","Promise.html.vue"]]);export{p as default};