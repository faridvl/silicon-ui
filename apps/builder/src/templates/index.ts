import type { PageConfig, TemplateId } from '@/types/silicon'
import { saasV1Template } from './saas-v1'
import { saasV2Template } from './saas-v2'
import { agencyTemplate } from './agency'
import { appShowcaseTemplate } from './app-showcase'
import { financialTemplate } from './financial'
import { medicalTemplate } from './medical'
import { portfolioTemplate } from './portfolio'
import { softwareCompanyTemplate } from './software-company'

export const TEMPLATES: Record<TemplateId, PageConfig> = {
  'saas-v1': saasV1Template,
  'saas-v2': saasV2Template,
  agency: agencyTemplate,
  'app-showcase': appShowcaseTemplate,
  financial: financialTemplate,
  medical: medicalTemplate,
  portfolio: portfolioTemplate,
  'software-company': softwareCompanyTemplate,
}

export const TEMPLATE_LIST = Object.values(TEMPLATES)

export function getTemplate(id: TemplateId): PageConfig {
  return TEMPLATES[id]
}

export {
  saasV1Template,
  saasV2Template,
  agencyTemplate,
  appShowcaseTemplate,
  financialTemplate,
  medicalTemplate,
  portfolioTemplate,
  softwareCompanyTemplate,
}
