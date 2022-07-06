const graph_jscode="<pre style='height:400px'><code >const labels = [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;, &#39;Mayo&#39;, &#39;Junio&#39;]\n" +
    "\n" +
    "const dataset1 = {\n" +
    "    label: &quot;Dataset 1&quot;,\n" +
    "    data: [50, 20, 40, 60, 80, 100],\n" +
    "    borderColor: &#39;rgba(248, 37, 37, 0.8)&#39;,\n" +
    "    backgroundColor: &#39;rgba(255,0,0,0.29)&#39;,\n" +
    "    order:1,\n" +
    "    animations: {\n" +
    "        borderWidth: {\n" +
    "            duration: 1000,\n" +
    "            easing: &#39;linear&#39;,\n" +
    "            from: 10,\n" +
    "            to: 1,\n" +
    "            loop: true\n" +
    "        }\n" +
    "    }\n" +
    "};\n" +
    "\n" +
    "const dataset2 = {\n" +
    "    label: &quot;Dataset 2&quot;,\n" +
    "    data: [80, 90, 40, 50, 70, 90],\n" +
    "    borderColor: &#39;rgba(69,200,248,0.8)&#39;,\n" +
    "    backgroundColor: &#39;rgba(0,255,234,0.31)&#39;,\n" +
    "    type: &#39;line&#39;,\n" +
    "    order:0\n" +
    "};\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#graph&quot;);\n" +
    "\n" +
    "const data = {\n" +
    "    labels: labels,\n" +
    "    datasets: [dataset1,dataset2]\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;bar&#39;,\n" +
    "    data: data,\n" +
    "};\n" +
    "\n" +
    "new Chart(graph, config);</code></pre>";

const graph_htmlcode="<pre><code>&lt;div style=&quot;width: 600px&quot;&gt;\n" +
    "   &lt;canvas id=&quot;graph&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph-js').innerHTML = graph_jscode;
document.getElementById('graph-html').innerHTML = graph_htmlcode;