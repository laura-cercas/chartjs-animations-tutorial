const graph_jscode="<pre style='height:400px'><code >const labels = [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;, &#39;Mayo&#39;, &#39;Junio&#39;, &#39;Julio&#39;];\n" +
    "\n" +
    "\n" +
    "\n" +
    "const dataset1 = {\n" +
    "    label: &quot;Dataset 1&quot;,\n" +
    "    data: [65, 59, 80, 81, 26, 55, 40],\n" +
    "    borderColor: &#39;rgba(248, 37, 37, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    animations: {\n" +
    "        tension: {\n" +
    "            duration: 1000,\n" +
    "            easing: &#39;linear&#39;,\n" +
    "            from: 1,\n" +
    "            to: 0,\n" +
    "            loop: true\n" +
    "        }\n" +
    "    }\n" +
    "};\n" +
    "\n" +
    "const dataset2 = {\n" +
    "    label: &quot;Dataset 2&quot;,\n" +
    "    data: [40, 60, 50, 77, 54, 30, 40],\n" +
    "    borderColor: &#39;rgba(69, 248, 84, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    tension: 0.1\n" +
    "};\n" +
    "\n" +
    "const dataset3 = {\n" +
    "    label: &quot;Dataset 3&quot;,\n" +
    "    data: [10, 80, 40, 30, 20, 44, 40],\n" +
    "    borderColor: &#39;rgba(69, 140, 248, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    tension: 0.1\n" +
    "};\n" +
    "\n" +
    "const data = {\n" +
    "    labels: labels,\n" +
    "    datasets: [dataset1,dataset2,dataset3]\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;line&#39;,\n" +
    "    data: data,\n" +
    "};\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#graph&quot;);\n" +
    "new Chart(graph, config);</code></pre>";

const graph_htmlcode="<pre><code>&lt;div&gt;\n" +
    "   &lt;canvas id=&quot;graph&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph-js').innerHTML = graph_jscode;
document.getElementById('graph-html').innerHTML = graph_htmlcode;