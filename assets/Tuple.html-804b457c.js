import{_ as n,o as s,c as a,d as e,a as t,f as p}from"./app-2cf624b5.js";const o={},c=t("p",null,"元组是一种特殊的数组类型，它具有以下特征",-1),i=p(`<ol><li><p>元组中的每个子元素类型都是确定的</p></li><li><p>有预定义的长度</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StringNumberPair</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> tuple<span class="token operator">:</span> StringNumberPair
<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>pair<span class="token operator">:</span> StringNumberPair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> pair<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> pair<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function l(u,r){return s(),a("div",null,[c,e(" more "),i])}const k=n(o,[["render",l],["__file","Tuple.html.vue"]]);export{k as default};