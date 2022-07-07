const graph_jscode="<pre style='height:400px'><code >const data = {\n" +
    "    labels : [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;, &#39;Mayo&#39;, &#39;Junio&#39;, &#39;Julio&#39;],\n" +
    "    datasets: [{\n" +
    "        data: [65, 59, 80, 81, 26, 55, 40],\n" +
    "        backgroundColor: &#39;red&#39;,\n" +
    "    }]\n" +
    "\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;bar&#39;,\n" +
    "    data: data,\n" +
    "    options: {\n" +
    "        animations: {\n" +
    "            backgroundColor: {\n" +
    "                type: &#39;color&#39;,\n" +
    "                duration: 2000,\n" +
    "                easing: &#39;linear&#39;,\n" +
    "                from: &#39;blue&#39;,\n" +
    "                to: &#39;red&#39;,\n" +
    "                loop: true\n" +
    "            }\n" +
    "        },\n" +
    "        plugins: {\n" +
    "            legend:{\n" +
    "                display:false\n" +
    "            }\n" +
    "        }\n" +
    "    },\n" +
    "\n" +
    "};\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#graph&quot;);\n" +
    "new Chart(graph, config);</code></pre>";

const graph_htmlcode="<pre><code>&lt;div&gt;\n" +
    "   &lt;canvas id=&quot;graph&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph-js').innerHTML = graph_jscode;
document.getElementById('graph-html').innerHTML = graph_htmlcode;