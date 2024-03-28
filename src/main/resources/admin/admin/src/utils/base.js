const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootu72sl/",
            name: "springbootu72sl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootu72sl/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "健康信息管理系统"
        } 
    }
}
export default base
