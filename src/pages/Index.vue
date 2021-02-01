<template>
  <Layout>
    <div
      v-for="edges in $page.blogList.edges"
      :key="edges.node.id"
      class="el-card is-hover-shadow"
      style="margin-bottom: 20px"
    >
      <div class="el-card__header">
        <div>
          <div class="el-row">
            <div class="el-col el-col-16">
              <span
                ><a style="text-decoration: none; cursor: pointer"
                  ><i class="el-icon-edit-outline"></i> &nbsp;{{
                    edges.node.title
                  }}
                </a></span
              >
            </div>
            <div class="el-col el-col-8">
              <div style="text-align: right">
                <button
                  type="button"
                  class="el-button el-button--text"
                  style="padding: 3px 0px"
                >
                  <!----><i class="el-icon-share"></i
                  ><!---->
                </button>
                <!---->
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="el-card__body">
        <div
          style="font-size: 0.9rem; line-height: 1.5; color: rgb(96, 108, 113)"
        >
          最近更新时长 {{ edges.node.timeToRead }}
        </div>
        <div
          v-html="edges.node.content"
          style="
            font-size: 1.1rem;
            line-height: 1.5;
            color: rgb(48, 49, 51);
            padding: 10px 0px 0px;
          "
        ></div>
      </div>
    </div>
    <Pager :info="$page.blogList.pageInfo" />
  </Layout>
</template>

<page-query>
query($page: Int){
  blogList:allBlogList(perPage:3,page:$page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        content
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
