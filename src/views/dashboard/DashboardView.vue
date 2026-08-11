<script setup lang="ts">
//
// 概览页：统计卡片 + 最近动态。数据为演示用的静态 mock。
//

const stats = [
  { label: '总用户数', value: '128', trend: '+12 本周' },
  { label: '今日活跃', value: '46', trend: '+6%' },
  { label: '待处理工单', value: '9', trend: '-3' },
  { label: '存储用量', value: '3.2 GB', trend: '+0.4 GB' },
]

const activities = [
  { id: 1, user: '李婷', action: '创建了工单', target: '「登录页报错」', time: '10 分钟前' },
  { id: 2, user: '王一哲', action: '更新了用户角色', target: 'admin → member', time: '32 分钟前' },
  { id: 3, user: '系统', action: '完成了一次备份', target: 'backup-20260811.gz', time: '1 小时前' },
  { id: 4, user: '赵敏', action: '修改了系统设置', target: '「站点名称」', time: '3 小时前' },
]
</script>

<template>
  <div class="page">
    <div class="page__head">
      <h2 class="page__title">概览</h2>
      <p class="page__sub">欢迎回来，这里是后台框架模版的演示首页。</p>
    </div>

    <section class="stats">
      <div v-for="stat in stats" :key="stat.label" class="stat">
        <span class="stat__label">{{ stat.label }}</span>
        <span class="stat__value">{{ stat.value }}</span>
        <span class="stat__trend">{{ stat.trend }}</span>
      </div>
    </section>

    <section class="panel">
      <div class="panel__head">
        <h3 class="panel__title">最近动态</h3>
      </div>
      <ul class="activity">
        <li v-for="item in activities" :key="item.id" class="activity__row">
          <span class="activity__dot" aria-hidden="true"></span>
          <span class="activity__text">
            <span class="activity__user">{{ item.user }}</span>
            {{ item.action }}
            <span class="activity__target">{{ item.target }}</span>
          </span>
          <span class="activity__time">{{ item.time }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1080px;
  margin: 0 auto;
}

.page__head {
  margin-bottom: 4px;
}
.page__title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.page__sub {
  margin: 6px 0 0;
  font-size: 13.5px;
  color: var(--lp-text-secondary);
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px;
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: 10px;
}
.stat__label {
  font-size: 12.5px;
  color: var(--lp-text-secondary);
}
.stat__value {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.stat__trend {
  font-size: 12.5px;
  color: var(--lp-accent);
}

.panel {
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: 10px;
  padding: 18px 20px;
}
.panel__head {
  padding-bottom: 12px;
  border-bottom: 1px solid var(--lp-border);
}
.panel__title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.activity {
  margin: 0;
  padding: 0;
  list-style: none;
}
.activity__row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 0;
  border-bottom: 1px solid var(--lp-border);
  font-size: 13.5px;
  color: var(--lp-text-secondary);
}
.activity__row:last-child {
  border-bottom: none;
}
.activity__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lp-accent);
  flex-shrink: 0;
}
.activity__text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.activity__user {
  color: var(--lp-text);
  font-weight: 500;
}
.activity__target {
  color: var(--lp-text);
}
.activity__time {
  font-size: 12.5px;
  color: var(--lp-text-dim);
  flex-shrink: 0;
}
</style>