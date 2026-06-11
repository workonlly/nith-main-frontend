const API_BASE = `http://${process.env.NEXT_PUBLIC_URL || 'localhost:4000'}`;

// ======================================================
// TYPE INTERFACES Aligned with DB Schemas
// ======================================================

export interface HistoryData {
  id?: number;
  description1: string | null;
  description1_hi: string | null;
  description2: string | null;
  description2_hi: string | null;
  legacy: string | null;
  legacy_hi: string | null;
}

export interface TimelineEvent {
  id?: number;
  year: string;
  event_date: string;
  title: string | null;
  title_hi: string | null;
  subtitle: string | null;
  subtitle_hi: string | null;
  description: string | null;
  description_hi: string | null;
}

export interface MissionPillarRaw {
  id?: number;
  reference_id?: number;
  title_en: string | null;
  title_hi: string | null;
  description_en: string | null;
  description_hi: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface LegacyStatRaw {
  id?: number;
  reference_id?: number;
  value_en: string | null;
  value_hi: string | null;
  label_en: string | null;
  label_hi: string | null;
  description_en: string | null;
  description_hi: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface VisionMissionRawResponse {
  id?: number;
  guiding_principles_heading_en: string | null;
  guiding_principles_heading_hi: string | null;
  guiding_principles_description_en: string | null;
  guiding_principles_description_hi: string | null;
  vision_heading_en: string | null;
  vision_heading_hi: string | null;
  vision_subtitle_en: string | null;
  vision_subtitle_hi: string | null;
  vision_description_en: string | null;
  vision_description_hi: string | null;
  strategic_objectives_heading_en: string | null;
  strategic_objectives_heading_hi: string | null;
  mission_heading_en: string | null;
  mission_heading_hi: string | null;
  mission_subtitle_en: string | null;
  mission_subtitle_hi: string | null;
  tagline_en: string | null;
  tagline_hi: string | null;
  tagline_description_en: string | null;
  tagline_description_hi: string | null;
  legacy_heading_en: string | null;
  legacy_heading_hi: string | null;
  legacy_subheading_en: string | null;
  legacy_subheading_hi: string | null;
  created_at?: string;
  updated_at?: string;
  missionPillars: MissionPillarRaw[];
  legacyStats: LegacyStatRaw[];
}

// ABOUT CITY SCHEMAS 
export interface AboutCityMainRaw {
  id?: number;
  heading_en: string | null;
  heading_hi: string | null;
  introduction_en: string | null;
  introduction_hi: string | null;
  overview_title_en: string | null;
  overview_title_hi: string | null;
  overview_subtitle_en: string | null;
  overview_subtitle_hi: string | null;
}

export interface AboutCityInfoCardRaw {
  id: number;
  reference_id: number;
  label_en: string | null;
  label_hi: string | null;
  value_en: string | null;
  value_hi: string | null;
}

export interface AboutCityDescriptionRaw {
  id: number;
  reference_id: number;
  description_en: string | null;
  description_hi: string | null;
}

// STRATEGIC GOALS SCHEMAS 
export interface GoalsMainRaw {
  id: number;
  heading_en: string | null;
  heading_hi: string | null;
  subheading_en: string | null;
  subheading_hi: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface GoalCardRaw {
  id: number;
  reference_id: number;
  title_en: string | null;
  title_hi: string | null;
  description_en: string | null;
  description_hi: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface CtaButtonRaw {
  id: number;
  buttonText_en?: string | null;
  buttonText_hi?: string | null;
  button_text_en?: string | null;
  button_text_hi?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface GoalsCombinedResponse {
  mainData: GoalsMainRaw;
  cardsData: GoalCardRaw[];
  ctaButtonData: CtaButtonRaw;
}

// CORE VALUES SCHEMAS
export interface CoreValuesPageRaw {
  id: number;
  hero_heading_en: string | null;
  hero_heading_hi: string | null;
  hero_description_en: string | null;
  hero_description_hi: string | null;
  pillars_label_en: string | null;
  pillars_label_hi: string | null;
  pillars_heading_en: string | null;
  pillars_heading_hi: string | null;
  pillars_subtitle_en: string | null;
  pillars_subtitle_hi: string | null;
  practice_heading_en: string | null;
  practice_heading_hi: string | null;
  practice_subtitle_en: string | null;
  practice_subtitle_hi: string | null;
}

export interface CoreValueItemRaw {
  id: number;
  page_id: number;
  title_en: string | null;
  title_hi: string | null;
  description_en: string | null;
  description_hi: string | null;
}

export interface PracticeParagraphRaw {
  id: number;
  page_id: number;
  paragraph_en: string | null;
  paragraph_hi: string | null;
}

export interface CoreValuesCombinedResponse {
  pageData: CoreValuesPageRaw;
  coreValues: CoreValueItemRaw[];
  practiceParagraphs: PracticeParagraphRaw[];
}

// NEW: CONNECTIVITY RAW SCHEMAS (From connectivity.js Backend Models)
export interface ConnectivityPageRaw {
  id: number;
  hero_heading_en: string | null;
  hero_heading_hi: string | null;
  hero_description_en: string | null;
  hero_description_hi: string | null;
  travel_options_label_en: string | null;
  travel_options_label_hi: string | null;
  travel_options_heading_en: string | null;
  travel_options_heading_hi: string | null;
  travel_options_subtitle_en: string | null;
  travel_options_subtitle_hi: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface TravelServiceParagraphRaw {
  id: number;
  travel_option_id: number;
  paragraph_en: string | null;
  paragraph_hi: string | null;
}

export interface TravelOptionRaw {
  id: number;
  page_id: number;
  type: string; // 'air' | 'train' | 'bus'
  title_en: string | null;
  title_hi: string | null;
  description_en: string | null;
  description_hi: string | null;
  nearest_point_label_en: string | null;
  nearest_point_label_hi: string | null;
  nearest_point_value_en: string | null;
  nearest_point_value_hi: string | null;
  distance_label_en: string | null;
  distance_label_hi: string | null;
  distance_value_en: string | null;
  distance_value_hi: string | null;
  time_needed_en: string | null;
  time_needed_hi: string | null;
  services_label_en: string | null;
  services_label_hi: string | null;
  created_at?: string;
  updated_at?: string;
  servicesParagraphs: TravelServiceParagraphRaw[];
}

export interface ConnectivityCombinedResponse {
  pageData: ConnectivityPageRaw;
  travelOptions: TravelOptionRaw[];
}

// ======================================================
// API INTEGRATION FLOW DISPATCHERS
// ======================================================

export async function getHistoryData(): Promise<HistoryData> {
  try {
    const response = await fetch(`${API_BASE}/history`);
    if (!response.ok) throw new Error(`Failed to fetch history: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('History API Error:', error);
    throw error;
  }
}

export async function getTimelineData(): Promise<TimelineEvent[]> {
  try {
    const response = await fetch(`${API_BASE}/history/timeline`);
    if (!response.ok) throw new Error(`Failed to fetch timeline: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Timeline API Error:', error);
    throw error;
  }
}

export async function getVisionMissionData(): Promise<VisionMissionRawResponse> {
  try {
    const response = await fetch(`${API_BASE}/vision-mission`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`Failed to fetch vision mission: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Vision Mission API Error:', error);
    throw error;
  }
}

export async function getAboutCityMain(): Promise<AboutCityMainRaw> {
  try {
    const response = await fetch(`${API_BASE}/about-city`);
    if (!response.ok) throw new Error(`Failed to fetch city main: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('About City Main API Error:', error);
    throw error;
  }
}

export async function getAboutCityInfoCards(): Promise<AboutCityInfoCardRaw[]> {
  try {
    const response = await fetch(`${API_BASE}/about-city/info-cards`);
    if (!response.ok) throw new Error(`Failed to fetch city cards: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('About City Info Cards API Error:', error);
    throw error;
  }
}

export async function getAboutCityDescriptions(): Promise<AboutCityDescriptionRaw[]> {
  try {
    const response = await fetch(`${API_BASE}/about-city/descriptions`);
    if (!response.ok) throw new Error(`Failed to fetch city descriptions: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('About City Descriptions API Error:', error);
    throw error;
  }
}

export async function getStrategicGoalsData(): Promise<GoalsCombinedResponse> {
  try {
    const response = await fetch(`${API_BASE}/goals`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`Failed to fetch goals: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Strategic Goals API Error:', error);
    throw error;
  }
}

export async function getCoreValuesCombinedData(): Promise<CoreValuesCombinedResponse> {
  try {
    const response = await fetch(`${API_BASE}/core-values`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`Failed to fetch core values: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Core Values API Error:', error);
    throw error;
  }
}


export async function getConnectivityCombinedData(): Promise<ConnectivityCombinedResponse> {
  try {
    const response = await fetch(`${API_BASE}/connectivity`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch connectivity server payload: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Connectivity Combined API Error:', error);
    throw error;
  }
}