import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="outline" size="lg">
        <a href={siteConfig.stores.googlePlay} target="_blank" rel="noreferrer">Google Play</a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href={siteConfig.stores.appStore} target="_blank" rel="noreferrer">App Store</a>
      </Button>
    </div>
  );
}
