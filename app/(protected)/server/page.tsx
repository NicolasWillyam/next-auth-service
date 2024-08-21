import React, { use } from "react";

import { currentUser } from "@/lib/auth";

import UserInfo from "@/components/user/user-info";
import SuspenseFallback from "@/components/suspense-fallback";

const ServerPage = async () => {
  const user = await currentUser();

  return <SuspenseFallback><UserInfo label={"Server Side"} user={user} /></SuspenseFallback>;
};

export default ServerPage;
