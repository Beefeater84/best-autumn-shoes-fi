import { listPosts } from "@/entities/post";

import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumbs";
import { PageSection } from "@/shared/ui/page-section";
import { ContentLink } from "@/widgets/content-link";
import { CenteredPageLayout } from "@/widgets/page-centred-layout";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function MainPageContent() {
  const queryClient = useQueryClient();

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["listPosts"],
    queryFn: () => listPosts(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  console.log("data", data, isLoading);

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Resources</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <h1 className="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Resources
      </h1>
      <p className="mt-6 max-w-xl text-base/7 text-gray-600 dark:text-gray-400">
        A collection of resources that can help you navigate uncertainty and
        make choices aligned with your values and goals.
      </p>
      <div className="mt-16 space-y-16">
        <PageSection title={<h2>Videos</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            Learn to separate signal from noise, and instincts from impulses.
          </p>
          <div className="mt-8 max-w-2xl space-y-6">
            {data?.map((post) => (
              <ContentLink
                key={post.id}
                type="video"
                title={post.title}
                description={post.author.name}
                href={`/post/${post.id}`}
              />
            )) || <p>Loading...</p>}
          </div>
        </PageSection>
      </div>
    </CenteredPageLayout>
  );
}
