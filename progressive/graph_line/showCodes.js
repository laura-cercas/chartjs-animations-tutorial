const graph_jscode="<pre style='height:400px'><code >const data = [];\n" +
    "const data2 = [];\n" +
    "let prev = 100;\n" +
    "let prev2 = 80;\n" +
    "for (let i = 0; i &lt; 1000; i++) {\n" +
    "    prev += 5 - Math.random() * 10;\n" +
    "    data.push({x: i, y: prev});\n" +
    "    prev2 += 5 - Math.random() * 10;\n" +
    "    data2.push({x: i, y: prev2});\n" +
    "}\n" +
    "\n" +
    "\n" +
    "const totalDuration = 10000;\n" +
    "const delayBetweenPoints = totalDuration / data.length;\n" +
    "const previousY = (ctx) =&gt; ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps([&#39;y&#39;], true).y;\n" +
    "const animation = {\n" +
    "    x: {\n" +
    "        type: &#39;number&#39;,\n" +
    "        easing: &#39;linear&#39;,\n" +
    "        duration: delayBetweenPoints,\n" +
    "        from: NaN, // the point is initially skipped\n" +
    "        delay(ctx) {\n" +
    "            if (ctx.type !== &#39;data&#39; || ctx.xStarted) {\n" +
    "                return 0;\n" +
    "            }\n" +
    "            ctx.xStarted = true;\n" +
    "            return ctx.index * delayBetweenPoints;\n" +
    "        }\n" +
    "    },\n" +
    "    y: {\n" +
    "        type: &#39;number&#39;,\n" +
    "        easing: &#39;linear&#39;,\n" +
    "        duration: delayBetweenPoints,\n" +
    "        from: previousY,\n" +
    "        delay(ctx) {\n" +
    "            if (ctx.type !== &#39;data&#39; || ctx.yStarted) {\n" +
    "                return 0;\n" +
    "            }\n" +
    "            ctx.yStarted = true;\n" +
    "            return ctx.index * delayBetweenPoints;\n" +
    "        }\n" +
    "    }\n" +
    "};\n" +
    "const config = {\n" +
    "    type: &#39;line&#39;,\n" +
    "    data: {\n" +
    "        datasets: [{\n" +
    "            label: &#39;Dataset 1&#39;,\n" +
    "            borderColor: &#39;rgb(75, 192, 192)&#39;,\n" +
    "            backgroundColor:&#39;rgb(75, 192, 192)&#39;,\n" +
    "            borderWidth: 1,\n" +
    "            radius: 0,\n" +
    "            data: data,\n" +
    "        },\n" +
    "            {\n" +
    "                label: &#39;Dataset 2&#39;,\n" +
    "                borderColor: &#39;rgb(192,75,141)&#39;,\n" +
    "                backgroundColor: &#39;rgb(192,75,141)&#39;,\n" +
    "                borderWidth: 1,\n" +
    "                radius: 0,\n" +
    "                data: data2,\n" +
    "            }]\n" +
    "    },\n" +
    "    options: {\n" +
    "        animation,\n" +
    "        interaction: {\n" +
    "            intersect: false\n" +
    "        },\n" +
    "        scales: {\n" +
    "            x: {\n" +
    "                type: &#39;linear&#39;\n" +
    "            }\n" +
    "        }\n" +
    "    }\n" +
    "};\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#graph&quot;);\n" +
    "new Chart(graph, config);</code></pre>";

const graph_htmlcode="<pre><code>&lt;div&gt;\n" +
    "   &lt;canvas id=&quot;graph&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph-js').innerHTML = graph_jscode;
document.getElementById('graph-html').innerHTML = graph_htmlcode;