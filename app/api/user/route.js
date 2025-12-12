import { connectDB } from "@/lib/mongodb";
import Startup from "@/models/Startup";
import Investor from "@/models/Investor";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");
    const type = searchParams.get("type");

    // ❌ OLD: returned empty {} → frontend fails
    // ✔ NEW: always return proper JSON with status
    if (!uid || !type) {
      return new Response(
        JSON.stringify({ error: "Missing uid or type" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let user = null;

    if (type === "startup") {
      user = await Startup.findOne({ firebaseUID: uid });
    } else if (type === "investor") {
      user = await Investor.findOne({ firebaseUID: uid });
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid user type" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ user: user || null }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("API /api/user GET ERROR:", err);

    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();
    const type = body.userType;

    if (!type) {
      return new Response(
        JSON.stringify({ error: "Missing userType" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let user;

    if (type === "startup") {
      user = await Startup.findOneAndUpdate(
        { firebaseUID: body.firebaseUID },
        body,
        { upsert: true, new: true }
      );
    } else if (type === "investor") {
      user = await Investor.findOneAndUpdate(
        { firebaseUID: body.firebaseUID },
        body,
        { upsert: true, new: true }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid userType" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, user }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("API /api/user PUT ERROR:", err);

    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
