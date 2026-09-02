# NoteX Case Study — Implementation Plan

## 1. Mục tiêu

Biến guideline NoteX thành một case study editorial tại `/work/notex`, tập trung vào tư duy Product Engineer và Frontend Lead: cách biến product thành system, tổ chức frontend architecture, thiết kế AI experience và mở rộng product beyond the web.

Case study phải phân biệt rõ:

- **Confirmed**: chỉ dùng các sự thật đã có trong tài liệu.
- **Draft narrative**: có thể biên tập lại cho mạch kể chuyện.
- **`[MOCK]` / `[TBD]`**: không được trình bày như production fact.

## 2. Scope phiên bản đầu

Triển khai bản compressed gồm 7 chương:

1. From Product to System
2. Designing the Frontend Architecture
3. Making AI Feel Like Product
4. Designing the Experience
5. Beyond the Web
6. Product Engineering in Practice
7. Results & Lessons

Không đưa toàn bộ 20 chương vào bản đầu. Screenshot, metric chưa xác thực và decorative animation để ở trạng thái placeholder hoặc `[MOCK]`.

## 3. Kiến trúc nội dung

### Content model

- Giữ case study trong MDX content collection.
- Frontmatter tối thiểu: `title`, `description`, `published`, `featured`, `order`, `role`, `period`, `disciplines`, `technologies`.
- Nội dung chương dùng heading có thứ bậc rõ ràng.
- Diagram có `aria-label` hoặc text fallback để không phụ thuộc hình ảnh.
- Dữ liệu chưa xác thực phải có nhãn ngay tại nơi hiển thị.

### Route

- Public route: `/work/notex`.
- Route listing `/work` lấy metadata từ content collection.
- SEO title, description, canonical, Open Graph và sitemap phải được sinh từ layout hiện có.

## 4. Component plan

### Shared primitives

- `Container`: content, reading, wide và full width.
- `Section`: spacing và tone thống nhất.
- `Stack` / `Cluster`: layout primitives cho vertical/horizontal rhythm.
- `Heading`, `Lead`, `Label`, `Meta`, `Link`, `Code`.
- `VisuallyHidden`: accessibility text.

### Navigation

- `Header` và `Footer` dùng shared `Container`.
- `NavLink` tự xác định active route và thêm `aria-current`.
- `SocialLinks` chỉ render các contact field có giá trị.
- `Breadcrumbs` dùng cho case-study context.

### Case-study components

- `CaseStudyChapter`: chapter label, heading, summary và content slot.
- `Callout`: decision hoặc principle quan trọng.
- `DecisionBlock`: problem → decision → trade-off.
- `QuoteBlock`: insight hoặc closing statement.
- `MediaBlock` / `ContentPlaceholder`: media chưa có asset phải có placeholder rõ ràng.
- `EmptyState`: dùng cho section chưa có dữ liệu.

### Visual modules riêng cho NoteX

- `ArchitectureDiagram`: state ownership và data flow.
- `AILifecycle`: intent → context → generation → validation → recovery → product state.
- `PlatformModel`: web, extension, desktop cùng chia sẻ NoteX core.
- `MetricGrid`: chỉ hiển thị metric có nguồn; metric giả lập bắt buộc gắn `[MOCK]`.

## 5. Visual/design requirements

- Editorial, technical, Swiss-grid direction.
- Typography là visual system chính; tránh generic SaaS illustration.
- Dùng CSS variables/design tokens làm source of truth.
- Responsive desktop/mobile, không horizontal overflow.
- Diagram ưu tiên HTML/CSS có text fallback, không phụ thuộc ảnh raster.
- Không thêm React, shadcn, Radix hoặc UI library cho static content.
- Chỉ cân nhắc React island khi xuất hiện interaction phức tạp thực sự.
- Hỗ trợ keyboard focus và `prefers-reduced-motion`.
- Animation không thuộc acceptance criteria của phiên bản đầu.

## 6. Trình tự triển khai

### Phase 0 — Baseline

- Đọc guideline V1/V2 và đánh dấu confirmed, draft, mock.
- Kiểm tra route/layout/content collection hiện tại.
- Chạy `pnpm check`, `pnpm build` và E2E làm baseline.

### Phase 1 — Content foundation

- Chuẩn hóa `notex.mdx` theo 7 chương.
- Viết narrative dựa trên state ownership, AI productization và platform expansion.
- Gắn `[MOCK]`/`[TBD]` cho mọi claim chưa kiểm chứng.
- Thêm placeholder cho screenshot, architecture outcome và metric còn thiếu.

### Phase 2 — Shared system

- Tách primitives, typography, navigation và content blocks.
- Chuyển page/layout hiện tại sang composition bằng các component này.
- Không để business/content copy bị hard-code rải rác trong component.

### Phase 3 — NoteX visuals

- Implement architecture diagram.
- Implement AI lifecycle diagram.
- Implement platform model.
- Implement result/lesson blocks.
- Kiểm tra semantic HTML và text fallback cho từng visual.

### Phase 4 — Responsive/accessibility polish

- Test grid, spacing, typography ở mobile và desktop.
- Test tab order, visible focus, heading hierarchy và reduced motion.
- Kiểm tra link external, breadcrumb và screen-reader labels.

### Phase 5 — Verification and delivery

- `pnpm check` phải đạt 0 errors/warnings/hints.
- `pnpm build` phải sinh `/work/notex` và sitemap.
- Playwright kiểm tra metadata, navigation, mobile overflow và accessibility smoke.
- Review thủ công nội dung để chắc chắn không biến `[MOCK]` thành fact.
- Commit theo phase và push sau khi working tree sạch.

## 7. Acceptance criteria

- `/work/notex` load thành công và có một `h1` duy nhất.
- Có đủ 7 chapter theo đúng thứ tự guideline.
- Architecture, AI lifecycle và platform model đều có visual representation đọc được.
- Mọi metric/claim chưa xác thực đều có `[MOCK]` hoặc `[TBD]`.
- Không có screenshot giả hoặc claim production được tự bịa.
- Layout đạt desktop/mobile, không overflow ngang.
- Keyboard focus, reduced motion và semantic headings hoạt động.
- Không phát sinh UI framework dependency.
- Check, build và E2E đều pass.

## 8. Những việc để phase sau

- Thay placeholder bằng screenshot được duyệt.
- Xác minh và thay thế metric `[MOCK]` bằng số liệu thật.
- Thêm interactive explorer hoặc diagram chỉ khi có use case rõ ràng.
- Cân nhắc React island/Radix/shadcn cho interaction có yêu cầu accessibility phức tạp.
- Bổ sung animation sau khi content hierarchy và performance đã ổn định.

