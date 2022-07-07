const graph_jscode="<pre style='height:400px'><code >const data = {\n" +
    "    datasets: [{\n" +
    "        label: &#39;Dataset&#39;,\n" +
    "        data: [{x: 20,y: 30,r: 15}, {x: 25, y: 24, r: 10}, {x: 28, y: 20, r: 10}, {x: 30, y: 16, r: 15}, {x: 40, y: 10, r: 10}, {x: 50, y: 20, r: 10},],\n" +
    "        backgroundColor: &#39;rgb(255, 99, 132)&#39;\n" +
    "    }]\n" +
    "\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;bubble&#39;,\n" +
    "    data: data,\n" +
    "    options: {\n" +
    "        animation: {\n" +
    "            delay: (context) =&gt; {\n" +
    "                let delay = 0;\n" +
    "                if (context.type === &#39;data&#39;) {\n" +
    "                    delay = context.dataIndex * 300 + context.datasetIndex * 100;\n" +
    "                }\n" +
    "                return delay;\n" +
    "            },\n" +
    "        },\n" +
    "        scales: {\n" +
    "            x: {\n" +
    "                stacked: true,\n" +
    "            },\n" +
    "            y: {\n" +
    "                stacked: true\n" +
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