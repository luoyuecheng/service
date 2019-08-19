const html = `<h1 id="智能设备监控与远程运维解决方案">智能设备监控与远程运维解决方案</h1>
<h1 id="1方案介绍">1.方案介绍</h1>
<p>有效采集和汇聚设备运行数据、工艺参数、质量检测数据、物料配送数据和进度管理数据等生产现场数据，通过数据分析和反馈在制造工艺、生产流程、质量管理、设备维护和能耗管理等具体场景中实现优化应用</p>
<h1 id="2应用场景">2.应用场景</h1>
<h2 id="21制造工艺">2.1制造工艺</h2>
<p>对工艺参数、设备运行等数据进行综合分析，找出生产过程中的最优参数，提升制造品质。</p>
<h2 id="22生产流程">2.2生产流程</h2>
<p>通过平台对生产进度、物料管理、企业管理等数据进行分析，提升排产、进度、物料、人员等方面管理的准确性</p>
<h2 id="23质量管理">2.3质量管理</h2>
<p>基于产品检验数据和“人机料法环”等过程数据进行关联性分析，实现在线质量监测和异常分析，降低产品不良率</p>
<h2 id="24设备维护">2.4设备维护</h2>
<p>结合设备历史数据与实时运行数据，构建数字孪生，及时监控设备运行状态，并实现设备预测性维护</p>
<h2 id="25能耗管理">2.5能耗管理</h2>
<p>基于现场能耗数据的采集与分析，对设备、产线、场景能效使用进行合理规划，提高能源使用效率，实现节能减排</p>
<h1 id="3整体架构">3.整体架构</h1>
<p><img src="http://sp-prod.oss-cn-shenzhen.aliyuncs.com/common/Architecture/IoT/Industr…E%E8%BF%90%E7%BB%B4%28%E6%A0%87%E5%87%86%E6%9E%B6%E6%9E%84%E5%9B%BE%29.jpg" alt="智能设备监控与运维架构图"></p>
<h1 id="4方案优势">4.方案优势</h1>
<h2 id="41-灵活的设备接入方式">4.1 灵活的设备接入方式</h2>
<p>支持多协议、多平台、多网络、多地域设备快速接入</p>
<ul>
<li><p>不同网络接入
提供不同网络的设备接入方案，例如2/3/4G、NB-IoT、LoRa等，解决企业异构网络设备接入管理的痛点</p>
</li>
<li><p>不同协议接入
提供多种协议的设备SDK，例如MQTT、CoAP、HTTP等，这样既能满足设备需要长连接保证实时性的需求，也能满足设备需要短连接降低功耗的需求</p>
</li>
<li><p>多平台设备SDK
多平台设备端代码，例如C、NodeJS、Java等语言，并且提供跨平台移植手册，让企业可以基于不同硬件平台有能力将设备接入物联网平台</p>
</li>
</ul>
<h2 id="42安全">4.2安全</h2>
<p>提供多重防护保障设备云端安全</p>
<ul>
<li><p>安全传输
提供TLS标准的数据传输通道、阿里云的DDOS高防IP和WAF防火墙，保证数据的机密性和完整性</p>
</li>
<li><p>权限机制
提供设备权限管理机制，保障设备与云端安全通信</p>
</li>
</ul>
<h2 id="43规则引擎">4.3规则引擎</h2>
<p>提供轻量、简单易用的规则配置,常见运算符,多种触发函数自由组合成自定义的规则,设备本地即时计算.</p>
<h2 id="44灵活松耦合及强大的api">4.4灵活松耦合及强大的API</h2>
<p>支持私有化、公有云、客户专有云的混合部署方案，各云服务组件之间使用松耦合设计。提供开放标准的API，可通过调用API实现控制台操作，方便第三方应用快速集成云端服务和企业现有系统。</p>
<h2 id="45移动化，方便随时随地监控与响应">4.5移动化，方便随时随地监控与响应</h2>
<p>功能移动化优先，方便客户随时随地监控设备状态和远程修改参数调试和运维设备</p>
<h1 id="5客户案例">5.客户案例</h1>
<h3 id="风洞设备监控与运维项目"><a href="https://www.uptocloud.cn/#/case/1811292211426041739?articleId=1811301059244811509&amp;openIndex=0">风洞设备监控与运维项目</a></h3>
<h3 id="显示屏检测设备监控与运维项目"><a href="https://www.uptocloud.cn/#/case/1811292211426041739?articleId=1811301107053801646&amp;openIndex=0">显示屏检测设备监控与运维项目</a></h3>`

const root = document.getElementById('root')

// 获取所有标签
const allLabelReg = /<[a-z][a-z0-9]*/img
const allLabelList = html.match(allLabelReg)
// 标签列表反序
allLabelList.reverse()

console.log(allLabelList)

// 生成的 taro 标签
let viewHtmlList
// 解析的 dom
let taroLabel
// 标签位置
let labelIndex = []

// 判断是否有子标签
const isChild = function (content) {
    const childLabel = content.match(allLabelReg)
    return childLabel !== -1
}

//
taroLabel = allLabelList.map((label) => {
    // 构造闭合标签
    const eLabel = '</' + label.substr(1) + '>'
    // 从后往前检索，匹配的位置
    const oIndex = html.lastIndexOf(label)
    // 从 oIndex 开始检索闭合标签位置
    const eIndex = html.indexOf(eLabel, oIndex)
    // 检索不到闭合标签，检索 /> 单标签闭合符
    if (eIndex === -1) {
        const eIndex = html.indexOf(eLabel, oIndex)
        const labelDom = {
            label: label.substr(1),

        }
        return labelDom
    }
    labelIndex.push(oIndex, eIndex)
    // 标签中间的内容
    const text = html.substring(oIndex, eIndex)
    console.log(text.replace(label, ''))
    // 判断是否有子元素
    const child = isChild(text)
    // 构造标签对象
    const labelDom = {
        label: label.substr(1),
        content: text.replace(new RegExp(label + '.*?>', 'ig'), ''),
        // 标签位置，左闭右开
        index: [oIndex, eIndex + eLabel.length]
    }

    // 
    labelIndex.push(labelDom)
})